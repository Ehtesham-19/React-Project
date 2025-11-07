import React, { useState, useEffect } from "react";

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    subject: "",
    time: "",
  });

  // Load from localStorage on mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(saved);
  }, []);

  // Save to localStorage whenever events change
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  const startDay = (year, month) => new Date(year, month, 1).getDay();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getEventsForDate = (date) => {
    const d = date.toDateString();
    return events.filter((e) => new Date(e.date).toDateString() === d);
  };

  const handleAddEvent = () => {
    if (!newEvent.title) return alert("Enter a title");
    const newItem = {
      ...newEvent,
      id: Date.now(),
      date: selectedDate,
    };
    setEvents([...events, newItem]);
    setNewEvent({ title: "", subject: "", time: "" });
    setShowForm(false);
  };

  const renderCalendar = () => {
    const totalDays = daysInMonth(year, month);
    const firstDay = startDay(year, month);
    const days = [];

    // empty cells before start of month
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div
          key={`empty-${i}`}
          className="h-24 border rounded-xl bg-gray-50"
        ></div>
      );
    }

    // actual days
    for (let i = 1; i <= totalDays; i++) {
      const dateObj = new Date(year, month, i);
      const isToday = dateObj.toDateString() === new Date().toDateString();
      const dayEvents = getEventsForDate(dateObj);

      days.push(
        <div
          key={i}
          onClick={() => setSelectedDate(dateObj)}
          className={`relative h-24 border rounded-xl flex flex-col items-center justify-start p-1 cursor-pointer hover:bg-violet-50 ${
            selectedDate.toDateString() === dateObj.toDateString()
              ? "border-violet-500 bg-violet-50"
              : ""
          } ${isToday ? "border-orange-400" : ""}`}
        >
          <span className="text-gray-700 text-sm mt-1">{i}</span>
          <div className="flex gap-1 mt-2">
            {dayEvents.slice(0, 3).map((ev, idx) => (
              <span
                key={idx}
                className={`w-2 h-2 rounded-full ${
                  idx % 3 === 0
                    ? "bg-yellow-400"
                    : idx % 3 === 1
                    ? "bg-orange-400"
                    : "bg-violet-500"
                }`}
              ></span>
            ))}
          </div>
          {dayEvents.length > 3 && (
            <span className="text-[10px] text-gray-500 mt-1">
              +{dayEvents.length - 3}
            </span>
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col md:flex-row gap-8">
      {/* Left Calendar */}
      <div className="flex-1 bg-white shadow-lg rounded-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">Calendar</h2>

          <div className="flex items-center gap-3">
            <select
              value={month}
              onChange={(e) =>
                setCurrentDate(new Date(year, Number(e.target.value), 1))
              }
              className="border px-3 py-1 rounded-lg text-gray-600"
            >
              {monthNames.map((m, i) => (
                <option key={i} value={i}>
                  {m}
                </option>
              ))}
            </select>

            <select
              value={year}
              onChange={(e) =>
                setCurrentDate(new Date(Number(e.target.value), month, 1))
              }
              className="border px-3 py-1 rounded-lg text-gray-600"
            >
              {Array.from({ length: 6 }, (_, i) => year - 3 + i).map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>

            <button
              onClick={() => setShowForm(true)}
              className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-1 rounded-lg"
            >
              + New Event
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2 text-center text-gray-500 font-medium mb-2">
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
          <div>Sun</div>
        </div>
        <div className="grid grid-cols-7 gap-2">{renderCalendar()}</div>
      </div>

      {/* Right Events */}
      <div className="w-full md:w-1/3 bg-white shadow-lg rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          Schedule Details
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          {selectedDate.toDateString()}
        </p>

        <div className="space-y-4 max-h-[500px] overflow-y-auto">
          {getEventsForDate(selectedDate).length === 0 ? (
            <p className="text-gray-400 text-sm">No events for this day.</p>
          ) : (
            getEventsForDate(selectedDate).map((event) => (
              <div
                key={event.id}
                className="p-4 border rounded-xl hover:shadow-sm transition"
              >
                <h4 className="font-semibold text-gray-700">{event.title}</h4>
                <p className="text-sm text-gray-500">{event.subject}</p>
                <p className="text-xs text-gray-400 mt-1">{event.time}</p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Add Event Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/30 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl w-80 shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Add New Event</h3>
            <input
              type="text"
              placeholder="Title"
              className="border w-full mb-2 px-3 py-2 rounded-lg"
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Subject"
              className="border w-full mb-2 px-3 py-2 rounded-lg"
              value={newEvent.subject}
              onChange={(e) =>
                setNewEvent({ ...newEvent, subject: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Time (e.g. 10:00 - 11:00)"
              className="border w-full mb-4 px-3 py-2 rounded-lg"
              value={newEvent.time}
              onChange={(e) =>
                setNewEvent({ ...newEvent, time: e.target.value })
              }
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-2 border rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleAddEvent}
                className="px-4 py-2 bg-violet-600 text-white rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
