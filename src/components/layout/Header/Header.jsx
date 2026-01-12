import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import useScrolled from "../../../hooks/useScrolled";
import SecondaryCTA from "../../ui/SecondaryCTA";
import logo from "../../../assets/images/navbar/HOH_Logo.svg";
import logoWhite from "../../../assets/images/navbar/HOH_Logo_white.svg";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Navigation items configuration
const NAV_ITEMS = [
  { label: "Home", href: "/", slug: "/" },
  { label: "About Us", href: "/about-us", slug: "/about-us" },
  { label: "Adults", href: "/adults", slug: "/adults" },
  { label: "Teens", href: "/teens", slug: "/teens" },
  { label: "Kids", href: "/kids", slug: "/kids" },
  { label: "Services", href: "/services", slug: "/services" },
  { label: "Franchise", href: "/franchise", slug: "/franchise" },
  { label: "Locations", href: "/locations", slug: "/locations" },
];

// Brand red color from Figma design
const BRAND_RED = "#d82028";

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const isHome = location.pathname === "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrolled = useScrolled(4);
  const navigate = useNavigate();

  const closeMobileMenu = () => {
    navigate("/contactUs");
    setMobileMenuOpen(false);
  };

  const isActive = (slug) => currentPath === slug;

  return (
    <header
      className={`${isHome ? "fixed" : "sticky"} w-full top-0 z-50 transition-shadow duration-200  ${
        !isHome
          ? "bg-white/90  supports-backdrop-filter:bg-white/70 border-b border-neutral-200 backdrop-blur"
          : scrolled ? "bg-transparent supports-backdrop-filter:bg-[#F2F2F2]/70 backdrop-blur" : "bg-transparent"
      } ${scrolled ? "shadow-md" : ""}`}
    >
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="flex items-center justify-between min-h-[64px]">
          {/* Left: Brand Logo */}
          <Link
            to="/"
            className="flex gap-2 items-center max-h-[31px] max-w-[178px] font-medium rounded-md text-neutral-900 "
            aria-label="House of Handsome - Home"
          >
            {/* Logo from Figma */}
            <img
              src={isHome && !scrolled ? logoWhite : logo}
              alt="House of Handsome Logo"
              className="object-contain w-full h-full"
            />
          </Link>

          {/* Center: Desktop Navigation */}
          <nav className="hidden gap-6 items-center lg:flex" aria-label="Main">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.slug}
                to={item.href}
                className={`text-[16px] capitalize transition-colors relative py-2  rounded ${
                  isActive(item.slug)
                    ? "font-bold after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:rounded-full"
                    : isHome && !scrolled ? "text-white hover:text-neutral-300 font-medium" : "text-black hover:text-neutral-700 font-medium"
                }`}
                style={
                  isActive(item.slug)
                    ? { color: BRAND_RED, "--tw-after-bg": BRAND_RED }
                    : {}
                }
              >
                {item.label}
                {isActive(item.slug) && (
                  <span
                    className="absolute -bottom-0 left-0 h-[2px] w-full rounded-full"
                    style={{ backgroundColor: BRAND_RED }}
                    aria-hidden="true"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right: Contact Button (Desktop) */}
          <div className="hidden lg:block">
            <SecondaryCTA
              onClick={() => navigate("/contactUs")}
              className={`rounded-[6px] px-6 py-3 text-[18px] font-medium! ${isHome && !scrolled ? "text-white !border !border-white" : ""}`}
            >
              Contact Us
            </SecondaryCTA>
          </div>

          {/* Mobile: Sheet Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="inline-flex justify-center items-center p-2 rounded-md hover:bg-neutral-100 outline-none lg:hidden"
                aria-label="Toggle navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full">
              <SheetHeader>
                <SheetTitle>
                  <Link to="/" onClick={closeMobileMenu}>
                    <img
                      src={logo}
                      alt="House of Handsome Logo"
                      className="object-contain w-[80%] h-full"
                    />
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <nav
                className="flex flex-col gap-1 mt-8"
                aria-label="Mobile navigation"
              >
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.slug}
                    to={item.href}
                    onClick={closeMobileMenu}
                    className={`rounded-md px-4 py-3 text-base capitalize transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-300 ${
                      isActive(item.slug)
                        ? "font-bold"
                        : "font-medium text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                    }`}
                    style={isActive(item.slug) ? { color: BRAND_RED } : {}}
                  >
                    {item.label}
                  </Link>
                ))}
                {/* Mobile Contact Button */}
                <div className="pt-6 mt-6 border-t  border-neutral-200">
                  <SecondaryCTA
                    className="justify-center w-full"
                    onClick={closeMobileMenu}
                  >
                    Contact Us
                  </SecondaryCTA>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;
