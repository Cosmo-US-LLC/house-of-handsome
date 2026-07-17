import React from "react";
import { Link } from "react-router-dom";

function LegalNote() {
  return (
    <div className="w-full bg-[#0c0c0c] py-6">
      <div className="mx-auto flex max-w-[1280px] flex-wrap justify-between gap-4 px-4 font-['Urbanist'] text-[13.5px] text-white/55 md:px-8">
        <span>&copy; 2026 House of Handsome &middot; Red Deer, Alberta</span>
        <span>
          <Link
            to="/red-deer-giveaway-rules"
            target="_blank"
            rel="noopener"
            className="text-white/70 hover:underline"
          >
            Official Contest Rules
          </Link>{" "}
          &middot; No purchase necessary
        </span>
      </div>
    </div>
  );
}

export default LegalNote;
