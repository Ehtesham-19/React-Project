import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function TeacherDetails({ teacherId = 1 }) {
  // React Query to fetch teacher by ID
  const { data, isLoading, isError } = useQuery({
    queryKey: ["teacher", teacherId],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:3000/teachers/${teacherId}`
      );
      return res.data;
    },
  });

  if (isLoading) return <p className="text-center text-lg">Loading...</p>;
  if (isError)
    return (
      <p className="text-center text-lg text-red-500">
        Failed to fetch teacher
      </p>
    );

  return (
    <div className="max-w-7xl mx-auto p-6 bg-[#EEF0FF] min-h-screen flex gap-8">
      {/* LEFT SECTION */}
      <div className="flex-[2]">
        <div className="bg-white p-6 rounded-3xl shadow-md">
          {/* Banner + Profile */}
          <div className="relative mb-6">
            <div className="h-40 rounded-2xl bg-purple-300"></div>
            <div className="absolute -bottom-6 left-6 w-20 h-20 rounded-full bg-white p-1 shadow-md">
              <div className="w-full h-full rounded-full bg-gray-300"></div>
            </div>
          </div>

          {/* Name + Subject */}
          <div className="mt-10">
            <h1 className="text-2xl font-bold">{data?.name}</h1>
            <p className="text-gray-500">{data?.subject} Teacher</p>
          </div>

          {/* Contact Info */}
          <div className="mt-4 flex flex-wrap items-center gap-8 text-gray-700 text-sm">
            <div className="flex items-center gap-2">
              <FiMapPin className="text-indigo-500" />
              <span>{data?.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiPhone className="text-indigo-500" />
              <span>{data?.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMail className="text-indigo-500" />
              <span>{data?.mail}</span>
            </div>
          </div>

          {/* About */}
          <div className="mt-6">
            <h2 className="font-semibold text-lg mb-1">About:</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {data?.about}
            </p>
          </div>

          {/* Education */}
          <div className="mt-6">
            <h2 className="font-semibold text-lg mb-1">Education:</h2>
            <ul className="list-disc pl-5 text-gray-700 text-sm">
              <li>{data?.education}</li>
            </ul>
          </div>

          {/* Expertise */}
          <div className="mt-6">
            <h2 className="font-semibold text-lg mb-1">Expertise:</h2>
            <p className="text-gray-700 text-sm">{data?.expertise}</p>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION - static schedule for now */}
      <div className="flex-[1] space-y-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center justify-between">
          <div>
            <h3 className="font-semibold">World History</h3>
            <p className="text-gray-500 text-sm">Aug 26, 2021</p>
            <p className="text-gray-500 text-sm">09:00 - 10:00</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-blue-200"></div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center justify-between">
          <div>
            <h3 className="font-semibold">Ancient History</h3>
            <p className="text-gray-500 text-sm">Aug 26, 2021</p>
            <p className="text-gray-500 text-sm">11:00 - 12:00</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-red-200"></div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center justify-between">
          <div>
            <h3 className="font-semibold">Culture</h3>
            <p className="text-gray-500 text-sm">Aug 26, 2021</p>
            <p className="text-gray-500 text-sm">13:00 - 14:00</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-yellow-200"></div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center justify-between">
          <div>
            <h3 className="font-semibold">World History</h3>
            <p className="text-gray-500 text-sm">Aug 27, 2021</p>
            <p className="text-gray-500 text-sm">09:00 - 10:00</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-blue-200"></div>
        </div>

        <button className="w-full mt-4 bg-[#4B5FFF] text-white py-3 rounded-xl">
          View More
        </button>
      </div>
    </div>
  );
}
