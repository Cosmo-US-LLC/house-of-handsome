import React from "react";

function PrimaryCTA({ children, onClick, className = "", ...props }) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#d82028] cursor-pointer hover:bg-[#b91219] text-white font-bold text-base leading-[1.38] capitalize !px-6 !py-4 rounded-[10px] transition-colors duration-300 whitespace-nowrap inline-flex items-center justify-center ${className}`}
      style={{ fontFamily: "Urbanist, sans-serif" }}
      {...props}
    >
      {children || "Book An Appointment"}
    </button>
  );
}

export default PrimaryCTA;
