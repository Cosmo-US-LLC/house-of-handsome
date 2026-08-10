import logo from "@/assets/images/navbar/HOH_Logo_white.svg";

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] w-full bg-[#0c0c0c]/95 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="flex items-center h-16">
          <a
            href="#top"
            aria-label="House of Handsome - Home"
            className="flex gap-2 items-center max-h-[31px] max-w-[178px]"
          >
            <img
              src={logo}
              alt="House of Handsome Logo"
              className="object-contain w-full h-full"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
