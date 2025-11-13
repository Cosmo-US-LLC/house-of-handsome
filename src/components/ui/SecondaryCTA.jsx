import React from "react";

function SecondaryCTA({ children, onClick, className = "", ...props }) {
  return (
    <button
      onClick={onClick}
      className={`bg-transparent cursor-pointer hover:bg-black border border-black text-black hover:text-white font-bold text-base leading-[1.38] capitalize !px-4 !py-2 transition-colors duration-300 whitespace-nowrap inline-flex items-center justify-center ${className}`}
      style={{ fontFamily: "Urbanist, sans-serif" }}
      {...props}
    >
      {children || "Button Text"}
    </button>
  );
}

export default SecondaryCTA;
