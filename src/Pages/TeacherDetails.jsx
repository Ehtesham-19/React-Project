import React from "react";
import {
  FiPhone,
  FiMail,
  FiSearch,
  FiMaximize2,
  FiBell,
  FiChevronRight,
} from "react-icons/fi";

export default function TeacherDetails() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between relative overflow-hidden gap-3">
              <h1 className="text-white text-lg sm:text-xl font-semibold">
                Teacher Details
              </h1>
              <div className="flex items-center gap-3">
                <button className="text-white/80 hover:text-white">
                  <FiSearch className="w-4 h-4" />
                </button>
                <button className="text-white/80 hover:text-white">
                  <FiMaximize2 className="w-4 h-4" />
                </button>
                <button className="text-white/80 hover:text-white">
                  <FiBell className="w-4 h-4" />
                </button>
                <div className="w-8 h-8 rounded-full bg-indigo-400 flex items-center justify-center text-white text-sm font-medium">
                  A
                </div>
              </div>

              {/* Gradient circles */}
              <div className="absolute -right-12 -top-8 w-32 h-32 rounded-full bg-orange-400 opacity-80"></div>
              <div className="absolute right-16 -top-4 w-24 h-24 rounded-full bg-yellow-400 opacity-90"></div>
              <div className="absolute -left-4 top-1 w-20 h-20 rounded-full bg-indigo-400 opacity-60"></div>
            </div>

            {/* Profile Content */}
            <div className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-500 flex items-center justify-center text-white text-3xl font-semibold flex-shrink-0">
                  M
                </div>

                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    Maria Historia
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">History Teacher</p>

                  {/* Contact info */}
                  <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                        <FiPhone className="w-3.5 h-3.5 text-orange-500" />
                      </div>
                      <span className="text-sm text-gray-700 font-medium">
                        00000, 000000000
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                        <FiPhone className="w-3.5 h-3.5 text-orange-500" />
                      </div>
                      <span className="text-sm text-gray-700 font-medium">
                        +91454 4-995-0
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                        <FiMail className="w-4 h-4 text-orange-500" />
                      </div>
                      <span className="text-sm text-gray-700 font-medium">
                        historia@mail.com
                      </span>
                    </div>
                  </div>

                  {/* About */}
                  <div className="mb-6">
                    <h3 className="text-base font-semibold text-gray-900 mb-2">
                      About:
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>

                  {/* Education */}
                  <div className="mb-6">
                    <h3 className="text-base font-semibold text-gray-900 mb-3">
                      Education:
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5"></div>
                        <p className="text-sm text-gray-700">
                          Master Degree, University Academic Honours
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5"></div>
                        <p className="text-sm text-gray-700">
                          Master of History, University Academic Honours
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Expertise */}
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-2">
                      Expertise:
                    </h3>
                    <p className="text-sm text-gray-700">
                      World History, Philosophy, Annotation, Cultural, Ancient
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-4">
          {/* Schedule Details */}
          <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <h3 className="text-base font-semibold text-gray-900">
                Schedule Details
              </h3>
              <button className="text-xs text-gray-500 hover:text-gray-700 mt-1 sm:mt-0">
                Thursday, Oct 12, 2021
              </button>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-semibold text-gray-900">
                  World History
                </h4>
                <span className="text-xs text-gray-400">01:00 PM</span>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Chapter 02 : Ancient</span>
                  <span className="text-indigo-600 font-medium">View</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Grade 07, A</span>
                  <span className="text-indigo-600 font-medium">View</span>
                </div>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-semibold text-gray-900">
                  Ancient History
                </h4>
                <span className="text-xs text-gray-400">03:00 PM</span>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Grade 09, A</span>
                  <span className="text-indigo-600 font-medium">View</span>
                </div>
              </div>
            </div>
          </div>

          {/* Course Section */}
          <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-5">
            <h3 className="text-base font-semibold text-gray-900 mb-3">
              Course
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Grade 06 - Grade 08</span>
                <FiChevronRight className="w-3 h-3 text-gray-400" />
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Grade 09 - Grade 12</span>
                <FiChevronRight className="w-3 h-3 text-gray-400" />
              </div>
            </div>
          </div>

          {/* World History Section */}
          <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-5">
            <h3 className="text-base font-semibold text-gray-900 mb-3">
              World History
            </h3>
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">Thursday, Oct 12, 2021</span>
                <span className="text-gray-400">01:00 PM</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">Tuesday, Oct 13, 2021</span>
                <span className="text-gray-400">03:00 PM</span>
              </div>
            </div>
            <button className="w-full text-center text-xs text-indigo-600 font-medium hover:text-indigo-700">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
