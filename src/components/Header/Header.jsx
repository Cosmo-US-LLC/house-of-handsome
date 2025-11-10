import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useScrolled from "../../hooks/useScrolled";
import SecondaryCTA from "../Buttons/SecondaryCTA";
import logo from "../../assets/images/navbar/HOH_Logo.svg";

// Navigation items configuration
const NAV_ITEMS = [
  { label: "Home", href: "/", slug: "/" },
  { label: "About Us", href: "/about", slug: "/about" },
  { label: "Adult", href: "/adult", slug: "/adult" },
  { label: "Teen", href: "/teen", slug: "/teen" },
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrolled = useScrolled(4);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (slug) => currentPath === slug;

  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur supports-backdrop-filter:bg-white/70 border-b border-neutral-200 transition-shadow duration-200 ${
        scrolled ? "shadow-md" : ""}`}
    >
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="flex items-center justify-between min-h-[64px]">
          {/* Left: Brand Logo */}
          <Link
            to="/"
            className="flex gap-2 items-center font-medium rounded-md text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2"
            aria-label="House of Handsome - Home"
          >
            {/* Logo from Figma */}
            <img
              src={logo}
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
                className={`text-sm capitalize transition-colors relative py-2 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2 rounded ${
                  isActive(item.slug)
                    ? "font-bold after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:rounded-full"
                    : "text-neutral-600 hover:text-neutral-900 font-medium"
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
                    className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full"
                    style={{ backgroundColor: BRAND_RED }}
                    aria-hidden="true"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right: Contact Button (Desktop) */}
          <div className="hidden lg:block">
            <SecondaryCTA className="px-6 py-3 text-sm">
              Contact US
            </SecondaryCTA>
          </div>

          {/* Mobile: Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="inline-flex justify-center items-center p-2 rounded-md lg:hidden hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              // Close Icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="py-4 border-t lg:hidden border-neutral-200"
            role="menu"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.slug}
                  to={item.href}
                  onClick={closeMobileMenu}
                  role="menuitem"
                  className={`px-4 py-3 text-base capitalize rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-300 ${
                    isActive(item.slug)
                      ? "font-bold"
                      : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 font-medium"
                  }`}
                  style={isActive(item.slug) ? { color: BRAND_RED } : {}}
                >
                  {item.label}
                </Link>
              ))}
              {/* Mobile Contact Button */}
              <div className="px-4 pt-4 mt-2 border-t border-neutral-200">
                <SecondaryCTA className="justify-center w-full">
                  Contact US
                </SecondaryCTA>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
