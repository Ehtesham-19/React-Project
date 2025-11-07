import React from "react";
import { useParams, Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function AssignmentDetails() {
  const { id } = useParams();

  // For now static; can replace with API fetch later
  const assignment = {
    id,
    title: "Math Homework",
    subject: "Mathematics",
    due: "2025-11-15",
    status: "Pending",
    description:
      "Complete exercises 1 to 10 from chapter 5 and prepare notes for revision. Make sure to show all your work and highlight key formulas.",
  };

  // Status badge colors
  const statusStyles = {
    Pending: "bg-yellow-100 text-yellow-800",
    Submitted: "bg-green-100 text-green-800",
    Late: "bg-red-100 text-red-800",
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-10">
        {/* Back */}
        <Link
          to="/assignments"
          className="flex items-center text-blue-600 font-medium mb-6 hover:underline"
        >
          <AiOutlineArrowLeft size={20} />
          <span className="ml-2">Back to Assignments</span>
        </Link>

        {/* Title and Status */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
          <h1 className="text-4xl font-bold text-gray-800">
            {assignment.title}
          </h1>
          <span
            className={`mt-3 md:mt-0 inline-block px-4 py-2 rounded-full font-semibold text-sm ${
              statusStyles[assignment.status]
            }`}
          >
            {assignment.status}
          </span>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 mb-8">
          <div>
            <p className="text-lg">
              <span className="font-semibold">Subject:</span>{" "}
              {assignment.subject}
            </p>
            <p className="text-lg mt-3">
              <span className="font-semibold">Due Date:</span> {assignment.due}
            </p>
          </div>
          <div>
            <p className="text-lg">
              <span className="font-semibold">Assignment ID:</span>{" "}
              {assignment.id}
            </p>
            {/* You can add more fields here */}
          </div>
        </div>

        {/* Description */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Description
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {assignment.description}
          </p>
        </div>
      </div>
    </div>
  );
}
