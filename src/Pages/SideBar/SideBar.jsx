import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineCalendar,
  AiOutlineMessage,
} from "react-icons/ai";
import { FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlineRestaurantMenu, MdAttachMoney } from "react-icons/md";
import { BiPulse, BiMenuAltLeft, BiX } from "react-icons/bi";
import logo from "../assets/logo.png";

const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <AiOutlineHome /> },
    { name: "Students", icon: <FaUserGraduate /> },
    { name: "Teachers", icon: <FaChalkboardTeacher /> },
    { name: "Events", icon: <AiOutlineCalendar /> },
    { name: "Finance", icon: <MdAttachMoney /> },
    { name: "Food", icon: <MdOutlineRestaurantMenu /> },
    { name: "User", icon: <AiOutlineUser /> },
    { name: "Chat", icon: <AiOutlineMessage /> },
    { name: "Latest Activity", icon: <BiPulse /> },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between bg-[#4d44b5] text-white px-4 py-3">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-8 h-8 object-contain" />
          <h1 className="font-semibold text-lg">Akademi</h1>
        </div>
        <button onClick={() => setOpen(!open)}>
          {open ? (
            <BiX className="text-3xl" />
          ) : (
            <BiMenuAltLeft className="text-3xl" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed lg:static top-0 left-0 h-full bg-[#4d44b5] z-50 flex flex-col items-center py-8 w-[260px] lg:w-[345px] transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo Section */}
        <div className="hidden lg:flex items-center gap-4 mb-10">
          <div className="w-12 h-12 flex justify-center items-center text-[#4d44b5] font-bold text-xl">
            <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          </div>
          <h1 className="text-white font-semibold text-2xl">Akademi</h1>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-3 w-full">
          {menuItems.map((item) => (
            <div
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`relative flex items-center gap-4 pr-5 py-3 cursor-pointer transition-all duration-200 
                ${
                  active === item.name
                    ? "pl-12 text-[#4d44b5]"
                    : "pl-10 text-white hover:bg-white/20"
                }`}
            >
              {active === item.name && (
                <div className="absolute right-0 top-0 bottom-0 bg-white rounded-l-[40px] w-[90%] z-0"></div>
              )}
              <div className="flex items-center gap-4 relative z-10 pl-2">
                <div className="text-2xl">{item.icon}</div>
                <p className="font-medium hidden sm:block">{item.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto mb-6 text-center px-4 hidden lg:block">
          <p className="text-white font-bold text-sm">
            Akademi - School Admission Dashboard
          </p>
          <p className="text-white text-sm">
            Made with <span className="text-red-500">♥</span> by Peterdraw
          </p>
        </div>
      </div>

      {/* Overlay for Mobile */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        ></div>
      )}

      {/* Mobile Bottom Nav */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#4d44b5] flex justify-around py-2">
        {menuItems.slice(0, 5).map((item) => (
          <button
            key={item.name}
            onClick={() => setActive(item.name)}
            className={`flex flex-col items-center text-xs ${
              active === item.name ? "text-[#ffd700]" : "text-white"
            }`}
          >
            <div className="text-xl">{item.icon}</div>
            <span className="text-[10px]">{item.name}</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
