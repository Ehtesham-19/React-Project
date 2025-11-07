import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { FiSearch, FiMoreHorizontal, FiPhone, FiMail } from "react-icons/fi";

export default function Teachers() {
  const queryClient = useQueryClient();

  // Fetch teachers
  const { data, isLoading, isError } = useQuery({
    queryKey: ["teachers"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/teachers");
      return res.data;
    },
  });

  if (isLoading) return <p className="text-center text-lg">Loading...</p>;
  if (isError)
    return (
      <p className="text-center text-lg text-red-500">
        Error fetching teachers
      </p>
    );

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
          <h1 className="text-2xl font-semibold text-gray-800">Teachers</h1>
          <div className="flex items-center gap-3">
            <button
              className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2"
              onClick={() => {
                // For example, open your NewTeacher form modal
                queryClient.invalidateQueries(["teachers"]);
              }}
            >
              <span className="text-lg">+</span>
              <span>New Teacher</span>
            </button>
          </div>
        </div>

        {/* Search bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
          <div className="relative w-full sm:w-72">
            <FiSearch className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search here..."
              className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-indigo-300"
            />
          </div>
        </div>

        {/* Grid of Teachers */}
        {/* Grid of Teachers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
          {data.slice(0, 12).map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white rounded-lg p-6 relative flex flex-col items-center shadow-sm hover:shadow-md transition"
            >
              <button className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded">
                <FiMoreHorizontal className="w-4 h-4 text-gray-400" />
              </button>

              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-indigo-200 rounded-full flex items-center justify-center mb-3">
                  <span className="text-xl font-medium text-indigo-700 cursor-pointer">
                    {teacher.name
                      ? teacher.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                      : "NA"}
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-gray-800 mb-1">
                  {teacher.name || "No Name"}
                </h3>

                <p className="text-gray-500 text-sm mb-2">
                  {teacher.subject || "No Subject"}
                </p>

                <div className="flex gap-3">
                  <button className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-700">
                    <FiPhone className="w-4 h-4 text-white cursor-pointer " />
                  </button>
                  <button className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-700">
                    <FiMail className="w-4 h-4 text-white cursor-pointer" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
