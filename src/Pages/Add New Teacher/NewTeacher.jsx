import React, { useState } from "react";
import axios from "axios";
import { FiBell } from "react-icons/fi";

export default function NewTeacher() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    photo: "",
    dateOfBirth: "",
    placeOfBirth: "",
    university: "",
    degree: "",
    startEndDate: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0].name : value, // just store file name
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the form data to your local API
      await axios.post("http://localhost:3000/teachers", formData);
      alert("Teacher added successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        photo: "",
        dateOfBirth: "",
        placeOfBirth: "",
        university: "",
        degree: "",
        startEndDate: "",
        city: "",
      });
    } catch (error) {
      console.error(error);
      alert("Error submitting form");
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      photo: "",
      dateOfBirth: "",
      placeOfBirth: "",
      university: "",
      degree: "",
      startEndDate: "",
      city: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap items-center justify-between mb-6 gap-3">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            Add New Teacher
          </h1>
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-gray-600">
              <FiBell className="w-5 h-5" />
            </button>
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-semibold">
              E
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Personal Details */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-6">
            <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 px-4 sm:px-6 py-3 sm:py-4">
              <h2 className="text-white text-lg font-semibold">
                Personal Details
              </h2>
            </div>

            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <InputField
                  label="First Name *"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Ex: John"
                  required
                />
                <InputField
                  label="Last Name *"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Ex: Doe"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <InputField
                  type="email"
                  label="Email *"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ex: example@mail.com"
                  required
                />
                <InputField
                  type="tel"
                  label="Phone *"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Ex: +1 234 567 8900"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address *
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Lorem ipsum dolor sit amet..."
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm resize-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Photo *
                  </label>
                  <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center h-[140px] flex flex-col items-center justify-center">
                    <input
                      type="file"
                      name="photo"
                      accept="image/*"
                      onChange={handleChange}
                      className="text-xs text-gray-500"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  type="date"
                  label="Date of Birth *"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                />
                <InputField
                  label="Place of Birth *"
                  name="placeOfBirth"
                  value={formData.placeOfBirth}
                  onChange={handleChange}
                  placeholder="Ex: London"
                  required
                />
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-6">
            <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 px-4 sm:px-6 py-3 sm:py-4">
              <h2 className="text-white text-lg font-semibold">Education</h2>
            </div>

            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <InputField
                  label="University *"
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  placeholder="University name"
                  required
                />
                <InputField
                  label="Degree *"
                  name="degree"
                  value={formData.degree}
                  onChange={handleChange}
                  placeholder="Bachelor, Masters, etc."
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  type="date"
                  label="Start & End Date *"
                  name="startEndDate"
                  value={formData.startEndDate}
                  onChange={handleChange}
                  required
                />
                <InputField
                  label="City *"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Ex: London"
                  required
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={handleReset}
              className="px-6 sm:px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-full font-semibold hover:bg-indigo-50 transition-colors text-sm"
            >
              Save As Draft
            </button>
            <button
              type="submit"
              className="px-6 sm:px-8 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition-colors text-sm"
            >
              SAVE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Reusable input component
const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
    />
  </div>
);
