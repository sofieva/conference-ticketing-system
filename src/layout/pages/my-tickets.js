import React, { useState } from "react";

const AttendeeDetails = ({ onBack, onNext }) => {
  const [selectedTicket, setSelectedTicket] = useState(null);

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0a0f14]">
      <div className="w-[600px] bg-[#112029] p-6 rounded-2xl shadow-lg border border-[#1c3d4b]">
        <div className="flex justify-between items-center pb-3 border-b border-[#1c3d4b]">
          <h2 className="text-white text-xl font-semibold">Attendee Details</h2>
          <span className="text-gray-400">Step 2/3</span>
        </div>

        <div className="mt-5 bg-[#0a1c26] p-4 rounded-lg border border-[#1c3d4b] text-center">
          <p className="text-gray-400 text-sm">Upload Profile Photo</p>
          <div className="mt-3 border border-[#1c3d4b] bg-[#112029] p-10 rounded-lg cursor-pointer">
            <p className="text-gray-400">📤 Drag & drop or click to upload</p>
          </div>
        </div>

        <div className="mt-5">
          <label className="text-gray-400 text-sm">Enter your name</label>
          <input
            type="text"
            className="w-full mt-1 p-2 bg-[#0a1c26] border border-[#1c3d4b] rounded-md text-white"
            placeholder="Your name"
          />
        </div>

        <div className="mt-5">
          <label className="text-gray-400 text-sm">Enter your email *</label>
          <div className="relative mt-1">
            <input
              type="email"
              className="w-full p-2 pl-10 bg-[#0a1c26] border border-[#1c3d4b] rounded-md text-white"
              placeholder="hello@aviolagos.io"
            />
            <span className="absolute left-3 top-2 text-gray-400">📧</span>
          </div>
        </div>

        <div className="mt-5">
          <label className="text-gray-400 text-sm">Special request?</label>
          <textarea
            className="w-full mt-1 p-2 bg-[#0a1c26] border border-[#1c3d4b] rounded-md text-white"
            placeholder="Textarea"
            rows="3"
          ></textarea>
        </div>

        <div className="flex justify-between mt-5">
          <button
            onClick={onBack}
            className="px-6 py-2 border border-[#1c3d4b] text-gray-400 rounded-md"
          >
            Back
          </button>
          <button
            onClick={onNext}
            className="px-6 py-2 bg-[#22b8cf] text-white rounded-md"
          >
            Get My Free Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttendeeDetails;
