import React from "react";
import { FiSearch } from "react-icons/fi";

export default function Notification() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-4 sm:p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h1 className="text-lg sm:text-xl font-semibold text-gray-800">
            Notification & Latest Activity
          </h1>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <div className="relative w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search here..."
                className="w-full sm:w-64 pl-8 pr-4 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-indigo-400 transition-colors"
              />
              <FiSearch className="absolute left-2.5 top-2.5 w-4 h-4 text-gray-400" />
            </div>

            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-indigo-200 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-indigo-700">NA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Today Section */}
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-gray-700 mb-4">Today</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-0 bottom-0 w-px bg-gray-200"></div>

            {/* Timeline Items */}
            <TimelineItem
              date="Monday, June 3, 2020"
              content={
                <>
                  <span className="font-bold text-[#303972]">Karen Hope</span>{" "}
                  has created new task at{" "}
                  <span className="text-red-500 font-bold">History Lesson</span>
                </>
              }
            />

            <TimelineItem
              date="Monday, June 3, 2020"
              content={
                <>
                  <span className="bg-red-100 text-red-600 px-1 font-bold">
                    REMINDER
                  </span>{" "}
                  <span>Due date of</span>{" "}
                  <span className="text-red-500 font-bold">
                    Science Homework
                  </span>{" "}
                  <span>task will be coming</span>
                </>
              }
            />

            <TimelineItem
              date="Monday, June 3, 2020"
              content={
                <>
                  <span className="font-bold text-[#303972]">Tony Soap</span>{" "}
                  commented at{" "}
                  <span className="text-red-500 font-bold">
                    Science Homework
                  </span>
                </>
              }
            />

            <TimelineItem
              date="Monday, June 3, 2020"
              content={
                <>
                  <span className="font-bold text-[#303972]">
                    Samantha William
                  </span>{" "}
                  uploaded 4 files on{" "}
                  <span className="text-[#4D44B5] font-bold">Art Class</span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
                    <div className="h-16 bg-indigo-200 rounded-lg"></div>
                    <div className="h-16 bg-indigo-200 rounded-lg"></div>
                    <div className="h-16 bg-indigo-200 rounded-lg"></div>
                    <div className="h-16 bg-indigo-200 rounded-lg"></div>
                  </div>
                </>
              }
            />

            <TimelineItem
              date="Monday, June 3, 2020"
              content={
                <>
                  <span className="font-bold text-[#303972]">You</span> moved{" "}
                  <span className="text-green-500 font-bold">
                    "Biology Homework"
                  </span>{" "}
                  task to Done
                </>
              }
            />
          </div>
        </div>

        {/* Yesterday Section */}
        <div>
          <h2 className="text-sm font-semibold text-gray-700 mb-4">
            Yesterday
          </h2>
          <div className="relative">
            <div className="absolute left-[7px] top-0 bottom-0 w-px bg-gray-200"></div>

            <TimelineItem
              date="Sunday, June 30, 2020"
              content={
                <>
                  <span className="font-bold text-[#303972]">Johnny Ahmad</span>{" "}
                  mentioned you at{" "}
                  <span className="text-amber-500 font-bold">
                    Art Class Homework
                  </span>
                </>
              }
            />

            <TimelineItem
              date="Sunday, June 30, 2020"
              content={
                <>
                  <span className="font-bold text-[#303972]">Nadila Adja</span>{" "}
                  mentioned you at{" "}
                  <span className="text-[#4D44B5] font-bold">
                    Programming Homework
                  </span>
                </>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable timeline component
const TimelineItem = ({ date, content }) => (
  <div className="relative flex items-start gap-4 mb-6">
    <div className="w-4 h-4 rounded-full border-2 border-indigo-500 bg-white z-10 mt-0.5 flex-shrink-0"></div>
    <div className="flex-1 text-sm text-gray-700">
      <div className="text-xs text-gray-400 mb-1">{date}</div>
      <div>{content}</div>
    </div>
  </div>
);
