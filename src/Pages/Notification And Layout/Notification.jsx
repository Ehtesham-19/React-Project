import React from "react";
import { FiSearch } from "react-icons/fi";
import { useQuery } from "@tanstack/react-query";
import { fetchNotifications } from "../Api/Notification";


export default function Notification() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["notifications"],
    queryFn: fetchNotifications,
  });

  if (isLoading)
    return <div className="text-center mt-10 text-gray-500">Loading...</div>;
  if (error)
    return (
      <div className="text-center mt-10 text-red-500">
        Failed to load notifications.
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-4 sm:p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h1 className="text-lg sm:text-xl font-semibold text-gray-800">
            Notification & Latest Activity
          </h1>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Search */}
            <div className="relative w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search here..."
                className="w-full sm:w-64 pl-8 pr-4 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-indigo-400 transition-colors"
              />
              <FiSearch className="absolute left-2.5 top-2.5 w-4 h-4 text-gray-400" />
            </div>

            {/* Avatar */}
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

            {/* Render Today Items */}
            {data?.today?.map((item) => (
              <TimelineItem key={item.id} date={item.date}>
                {item.contentType === "task" && (
                  <>
                    <span className="font-bold text-[#303972]">
                      {item.user}
                    </span>{" "}
                    has created new task at{" "}
                    <span className={`${item.targetColor} font-bold`}>
                      {item.target}
                    </span>
                  </>
                )}

                {item.contentType === "reminder" && (
                  <>
                    <span className="bg-red-100 text-red-600 px-1 font-bold">
                      REMINDER
                    </span>{" "}
                    <span>{item.textBefore} </span>
                    <span className="text-red-500 font-bold">
                      {item.task}
                    </span>{" "}
                    <span>{item.textAfter}</span>
                  </>
                )}

                {item.contentType === "comment" && (
                  <>
                    <span className="font-bold text-[#303972]">
                      {item.user}
                    </span>{" "}
                    commented at{" "}
                    <span className={`${item.targetColor} font-bold`}>
                      {item.target}
                    </span>
                  </>
                )}

                {item.contentType === "upload" && (
                  <>
                    <span className="font-bold text-[#303972]">
                      {item.user}
                    </span>{" "}
                    uploaded {item.files} files on{" "}
                    <span className="text-[#4D44B5] font-bold">
                      {item.target}
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
                      {[...Array(item.files)].map((_, i) => (
                        <div
                          key={i}
                          className="h-16 bg-indigo-200 rounded-lg"
                        ></div>
                      ))}
                    </div>
                  </>
                )}

                {item.contentType === "move" && (
                  <>
                    <span className="font-bold text-[#303972]">
                      {item.user}
                    </span>{" "}
                    moved{" "}
                    <span className="text-green-500 font-bold">
                      "{item.task}"
                    </span>{" "}
                    task to Done
                  </>
                )}
              </TimelineItem>
            ))}
          </div>
        </div>

        {/* Yesterday Section */}
        <div>
          <h2 className="text-sm font-semibold text-gray-700 mb-4">
            Yesterday
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-0 bottom-0 w-px bg-gray-200"></div>

            {/* Render Yesterday Items */}
            {data?.yesterday?.map((item) => (
              <TimelineItem key={item.id} date={item.date}>
                <span className="font-bold text-[#303972]">{item.user}</span>{" "}
                mentioned you at{" "}
                <span className={`${item.targetColor} font-bold`}>
                  {item.target}
                </span>
              </TimelineItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Timeline component
const TimelineItem = ({ date, children }) => (
  <div className="relative flex items-start gap-4 mb-6">
    <div className="w-4 h-4 rounded-full border-2 border-indigo-500 bg-white z-10 mt-0.5 flex-shrink-0"></div>
    <div className="flex-1 text-sm text-gray-700">
      <div className="text-xs text-gray-400 mb-1">{date}</div>
      <div>{children}</div>
    </div>
  </div>
);
