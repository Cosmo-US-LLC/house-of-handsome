import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-[#e6e3de] bg-white">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-3 px-4 py-7 font-['Urbanist'] text-[14px] font-medium text-[#4a4744] md:flex-row md:px-8">
        <span>Copyright {new Date().getFullYear()} House of Handsome</span>
        <span className="flex gap-5">
          <Link to="/privacy-policy" className="transition-colors hover:text-[#d82028]">Privacy Policy</Link>
          <Link to="/terms" className="transition-colors hover:text-[#d82028]">Terms of Service</Link>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
