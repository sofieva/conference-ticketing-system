import React, { useState } from "react";

const TicketConfirmation = ({ userData, onBack, onNext }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#04161c] text-white">
      <h2 className="text-2xl font-semibold">Your Ticket is Booked!</h2>
      <p className="text-gray-400 mt-2">
        Check your email for a copy or you can <span className="text-[#22b8cf] font-semibold cursor-pointer">download</span>
      </p>
      
      <div className="relative mt-6 bg-[#0a1c26] p-6 rounded-xl border border-[#1c3d4b] w-[350px] sm:w-[400px] md:w-[450px] text-center">
        <h3 className="text-lg font-bold text-[#22b8cf]">Techember Fest '25</h3>
        <p className="text-gray-400 text-sm mt-1">📍 04 Rumens road, Ikoyi, Lagos</p>
        <p className="text-gray-400 text-sm">📅 March 15, 2025 | 7:00 PM</p>
        
        <div className="mt-4 flex flex-col items-center">
          <img
            src="https://via.placeholder.com/100" 
            alt="Profile" 
            className="w-24 h-24 rounded-full border border-[#1c3d4b]"
          />
        </div>
        
        <div className="mt-4 text-left text-sm space-y-2">
          <div className="flex justify-between border-b border-[#1c3d4b] pb-2">
            <span className="text-gray-400">Enter your name</span>
            <span className="font-medium">{userData.name || "N/A"}</span>
          </div>
          <div className="flex justify-between border-b border-[#1c3d4b] pb-2">
            <span className="text-gray-400">Enter your email *</span>
            <span className="font-medium">{userData.email || "N/A"}</span>
          </div>
          <div className="flex justify-between border-b border-[#1c3d4b] pb-2">
            <span className="text-gray-400">Ticket Type:</span>
            <span className="font-medium">{userData.ticketType || "General"}</span>
          </div>
          <div className="flex justify-between border-b border-[#1c3d4b] pb-2">
            <span className="text-gray-400">Ticket for:</span>
            <span className="font-medium">{userData.ticketQuantity || 1}</span>
          </div>
          <div className="mt-2 text-gray-400 text-xs">
            {userData.notes ? userData.notes : "No additional notes."}
          </div>
        </div>
        
        <div className="mt-6">
          <div className="h-12 w-full bg-gray-800 rounded-md flex items-center justify-center">
            <span className="text-gray-500 text-lg tracking-widest">1 234567 891026</span>
          </div>
        </div>
      </div>
      
      <div className="mt-6 flex gap-4">
        <button className="px-6 py-2 border border-[#1c3d4b] text-gray-400 rounded-md" onClick={onBack}>Book Another Ticket</button>
        <button className="px-6 py-2 bg-[#22b8cf] text-white rounded-md" onClick={onNext}>Download Ticket</button>
      </div>
    </div>
  );
};

const TicketBooking = () => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({ name: "", email: "", ticketType: "VIP", ticketQuantity: 1, notes: "" });

  const onNext = () => setStep(step + 1);
  const onBack = () => setStep(step - 1);

  return (
    <div>
      {step === 3 && <TicketConfirmation userData={userData} onBack={onBack} onNext={onNext} />}
    </div>
  );
};

export default TicketBooking;
