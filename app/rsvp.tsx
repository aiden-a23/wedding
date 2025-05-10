"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function RSVP() {
  const [formData, setFormData] = useState({
    inviteCode: "",
    name: "",
    email: "",
    phone: "",
    message: "",
    plusOne: false,
    plusOneName: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("RSVP Submitted:", formData);
    // Add logic to send form data to a server or email
    alert("Thank you for your RSVP!");
    setFormData({
      inviteCode: "",
      name: "",
      email: "",
      phone: "",
      message: "",
      plusOne: false,
      plusOneName: "",
    });
  };

  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-emerald-100 to-green-200 text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center w-full max-w-md p-6 bg-white rounded-lg shadow-lg"
      >
        <h1 className="text-4xl font-bold mb-6">RSVP</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="inviteCode" className="block text-left font-medium mb-1">
              Your Invitation Code
            </label>
            <input
              type="text"
              id="inviteCode"
              name="inviteCode"
              value={formData.inviteCode}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-left font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-left font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-left font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>
          {formData.inviteCode === "1" && (
            <div>
              <div className="flex items-center space-x-2">
                <label htmlFor="plusOne" className="text-left font-medium">
                  Add a Plus One?
                </label>
                <input
                  type="checkbox"
                  id="plusOne"
                  name="plusOne"
                  checked={formData.plusOne}
                  onChange={handleChange}
                  className="h-5 w-5"
                />
              </div>
              {formData.plusOne && (
                <div className="mt-4">
                  <label htmlFor="plusOneName" className="block text-left font-medium mb-1">
                    Plus One's Name
                  </label>
                  <input
                    type="text"
                    id="plusOneName"
                    name="plusOneName"
                    value={formData.plusOneName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                </div>
              )}
            </div>
          )}
          <div>
            <label htmlFor="message" className="block text-left font-medium mb-1">
              Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition"
          >
            Submit RSVP
          </button>
        </form>
      </motion.div>
    </section>
  );
}