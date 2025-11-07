import React, { useState, useEffect } from "react";
import { FaEllipsisV, FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";

const gradeClasses = {
  A: "bg-[#4D44B5] text-white",
  B: "bg-[#FB7D5B] text-white",
  C: "bg-[#FCC43E] text-white",
};

function StudentTable() {
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activePage, setActivePage] = useState(1);

  const ITEMS_PER_PAGE = 12;

  // Safe initials generator
  const getInitials = (name) => {
    if (!name) return "NA";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  useEffect(() => {
    const API_URL = "http://localhost:3000/students";

    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const apiData = await response.json();

        const formattedData = apiData.map((student, index) => ({
          id: student.id,
          initials: getInitials(student.name),
          name: student.name || "No Name",
          studentId: `#${student.id.toString().padStart(9, "0")}`,
          date: student.date || "N/A",
          parent: student.parent_name || "N/A",
          city: student.city || "N/A",
          grade: student.grade === 10 ? "A" : student.grade === 11 ? "B" : "C",
          gradeText: `Grade ${student.grade || "N/A"}`,
          selected: index % 3 === 0,
        }));

        setRows(formattedData);
      } catch (e) {
        console.error("Failed to fetch student data:", e);
        setError(
          "Failed to load data. Please check your JSON server connection."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleSelect = (id) =>
    setRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, selected: !r.selected } : r))
    );

  const toggleSelectAll = () => {
    const allSelected = rows.every((r) => r.selected);
    setRows((prev) => prev.map((r) => ({ ...r, selected: !allSelected })));
  };

  const handlePageClick = (page) => {
    const totalPages = Math.ceil(rows.length / ITEMS_PER_PAGE);
    if (page >= 1 && page <= totalPages) setActivePage(page);
  };

  const isAllSelected = rows.length > 0 && rows.every((r) => r.selected);

  if (isLoading)
    return (
      <div className="p-10 text-center text-[#4D44B5]">
        Loading student data...
      </div>
    );

  if (error)
    return (
      <div className="p-10 text-center text-red-500 font-bold">{error}</div>
    );

  if (rows.length === 0)
    return (
      <div className="p-10 text-center text-[#6B7280]">
        No student data found.
      </div>
    );

  // Pagination logic
  const totalPages = Math.ceil(rows.length / ITEMS_PER_PAGE);
  const startIdx = (activePage - 1) * ITEMS_PER_PAGE;
  const paginatedRows = rows.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  return (
    <div className="max-w-[1400px] mx-auto bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead className="bg-[#FAFBFC] border-b-2 border-[#E1E4E8]">
            <tr>
              <th className="w-[50px] p-4 text-left">
                <div className="flex justify-center">
                  <div
                    onClick={toggleSelectAll}
                    className={`w-6 h-6 rounded border-3 flex items-center justify-center cursor-pointer ${
                      isAllSelected
                        ? "bg-[#303972] border-[#303972]"
                        : "border-gray-300 bg-white"
                    }`}
                    style={{ borderWidth: "3px" }}
                  >
                    {isAllSelected && (
                      <svg
                        width="13.5"
                        height="10"
                        viewBox="0 0 13.5 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 5L5 9L13 1"
                          stroke="#FFFFFF"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </th>
              {[
                "Name",
                "ID",
                "Date",
                "Parent Name",
                "City",
                "Contact",
                "Grade",
                "Action",
              ].map((h) => (
                <th
                  key={h}
                  className="p-4 text-left text-[#5746AF] font-semibold text-sm"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedRows.map((row) => (
              <tr
                key={row.id}
                className={`border-b border-[#E1E4E8] transition-colors ${
                  row.selected ? "bg-[#F5F3FF]" : "hover:bg-[#F9FAFB]"
                }`}
                style={{ height: "112px" }}
              >
                <td className="p-4 align-middle">
                  <div className="flex items-center justify-center h-full">
                    <div
                      onClick={() => toggleSelect(row.id)}
                      className={`w-6 h-6 rounded border-3 flex items-center justify-center cursor-pointer ${
                        row.selected
                          ? "bg-[#303972] border-[#303972]"
                          : "border-gray-300 bg-white"
                      }`}
                      style={{ borderWidth: "3px" }}
                    >
                      {row.selected && (
                        <svg
                          width="13.5"
                          height="10"
                          viewBox="0 0 13.5 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 5L5 9L13 1"
                            stroke="#FFFFFF"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                </td>
                <td className="p-5 align-middle">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-white"
                      style={{
                        background:
                          "linear-gradient(135deg,#B8B3F0 0%,#9D95E8 100%)",
                      }}
                    >
                      {row.initials}
                    </div>
                    <div className="text-sm font-semibold text-[#1F2937]">
                      {row.name}
                    </div>
                  </div>
                </td>
                <td className="p-5 text-[#5746AF] font-semibold align-middle">
                  {row.studentId}
                </td>
                <td className="p-5 text-[#6B7280] align-middle">{row.date}</td>
                <td className="p-5 align-middle">{row.parent}</td>
                <td className="p-5 align-middle">{row.city}</td>
                <td className="p-5 align-middle">
                  <div className="flex gap-3">
                    <button className="w-10 h-10 rounded-full bg-[#F0F0F0] flex items-center justify-center hover:bg-[#E4E4E4]">
                      <LuPhone className="w-6 h-6 text-[#4D44B5]" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-[#F0F0F0] flex items-center justify-center hover:bg-[#E4E4E4]">
                      <MdMailOutline className="w-6 h-6 text-[#4D44B5]" />
                    </button>
                  </div>
                </td>
                <td className="p-5 align-middle">
                  <span
                    className={`inline-block font-semibold text-sm ${
                      gradeClasses[row.grade]
                    }`}
                    style={{
                      width: 80,
                      height: 40,
                      borderRadius: 40,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "4px 8px",
                    }}
                  >
                    {row.gradeText}
                  </span>
                </td>
                <td className="p-5 align-middle">
                  <button className="text-[#A098AE] text-xl hover:text-[#5746AF] transition-colors">
                    <FaEllipsisV />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between p-5 border-t border-[#E1E4E8]">
        <div className="text-[#6B7280] text-sm">
          Showing {(activePage - 1) * ITEMS_PER_PAGE + 1}–
          {Math.min(activePage * ITEMS_PER_PAGE, rows.length)} of {rows.length}{" "}
          entries
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => handlePageClick(activePage - 1)}
            disabled={activePage === 1}
            className="w-[51px] h-[51px] flex items-center justify-center disabled:opacity-40"
          >
            <FaCaretLeft className="text-[#A098AE] text-2xl" />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => handlePageClick(p)}
              className={`w-[51px] h-[51px] rounded-full flex items-center justify-center text-lg font-semibold transition ${
                activePage === p
                  ? "bg-[#4D44B5] text-white border-2 border-[#4D44B5]"
                  : "border-2 border-[#A098AE] text-[#A098AE] bg-transparent"
              }`}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => handlePageClick(activePage + 1)}
            disabled={activePage === totalPages}
            className="w-[51px] h-[51px] flex items-center justify-center disabled:opacity-40"
          >
            <FaCaretRight className="text-[#A098AE] text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentTable;
