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
    <section className="min-h-[90vh] flex items-center justify-center py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center w-full max-w-xl mx-auto px-4"
      >
        <h1 className="text-5xl md:text-6xl font-light mb-2 text-[#800020]">RSVP</h1>
        <div className="w-24 h-[1px] bg-[#800020] mx-auto my-6"></div>
        <p className="text-lg md:text-xl mb-8">We look forward to celebrating with you!<br /><a href="https://calendar.app.google/QR3ugLcfNNPKj7b87" className="text-[#800020] hover:underline">Add to Calendar</a></p>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-[#800020]/10">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="inviteCode" className="block text-left font-medium mb-1 text-[#800020]">
                Your Invitation Code
              </label>
              <input
                type="text"
                id="inviteCode"
                name="inviteCode"
                value={formData.inviteCode}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-[#800020]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800020]/50"
                placeholder="Enter your invitation code"
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-left font-medium mb-1 text-[#800020]">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-[#800020]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800020]/50"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-left font-medium mb-1 text-[#800020]">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-[#800020]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800020]/50"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-left font-medium mb-1 text-[#800020]">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-[#800020]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800020]/50"
                placeholder="(123) 456-7890"
              />
            </div>
            {formData.inviteCode === "1" && (
              <div>
                <div className="flex items-center space-x-2">
                  <label htmlFor="plusOne" className="text-left font-medium text-[#800020]">
                    Add a Plus One?
                  </label>
                  <input
                    type="checkbox"
                    id="plusOne"
                    name="plusOne"
                    checked={formData.plusOne}
                    onChange={handleChange}
                    className="h-5 w-5 accent-[#800020]"
                  />
                </div>
                {formData.plusOne && (
                  <div className="mt-4">
                    <label htmlFor="plusOneName" className="block text-left font-medium mb-1 text-[#800020]">
                      Plus One's Name
                    </label>
                    <input
                      type="text"
                      id="plusOneName"
                      name="plusOneName"
                      value={formData.plusOneName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-[#800020]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800020]/50"
                      placeholder="Guest's full name"
                    />
                  </div>
                )}
              </div>
            )}
            <div>
              <label htmlFor="message" className="block text-left font-medium mb-1 text-[#800020]">
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-[#800020]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800020]/50"
                placeholder="Any dietary restrictions or special notes?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#800020] text-white py-3 rounded-lg hover:bg-[#a0515d] transition-colors duration-300 font-medium"
            >
              Submit RSVP
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}