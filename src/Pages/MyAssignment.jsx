import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  AiOutlinePlus,
  AiOutlineSearch,
  AiOutlineEye,
  AiOutlineEdit,
  AiOutlineDelete,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export default function MyAssignment() {
  const [search, setSearch] = useState("");

  // Fetch assignments from local JSON server
  const {
    data: assignments = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["assignments"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/assignments");
      return res.data;
    },
  });

  // Filter assignments by search
  const filtered = assignments.filter((a) =>
    a.title.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading) return <div className="p-6 text-center">Loading...</div>;
  if (isError)
    return (
      <div className="p-6 text-center text-red-600">
        Error loading assignments
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">My Assignments</h1>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition">
          <AiOutlinePlus size={20} />
          New Assignment
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-3 mb-5 bg-white p-3 rounded-xl shadow-sm">
        <AiOutlineSearch className="text-gray-400" size={22} />
        <input
          type="text"
          placeholder="Search assignments..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 rounded-lg outline-none"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-gray-200 text-left">
            <tr>
              <th className="p-4 font-semibold">Title</th>
              <th className="p-4 font-semibold">Subject</th>
              <th className="p-4 font-semibold">Due Date</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((a, index) => (
              <tr
                key={a.id}
                className={`border-t ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-gray-100 transition`}
              >
                <td className="p-4">{a.title}</td>
                <td className="p-4">{a.subject}</td>
                <td className="p-4">{a.due}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold 
                      ${
                        a.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : a.status === "Submitted"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                  >
                    {a.status}
                  </span>
                </td>
                <td className="p-4 flex justify-center gap-4 text-lg">
                  <Link
                    to={`/assignments/${a.id}`}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-xs font-medium hover:bg-blue-200"
                  >
                    Assignment Details
                  </Link>
                  <AiOutlineEye className="text-blue-500 cursor-pointer hover:text-blue-700" />
                  <AiOutlineEdit className="text-green-500 cursor-pointer hover:text-green-700" />
                  <AiOutlineDelete className="text-red-500 cursor-pointer hover:text-red-700" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
