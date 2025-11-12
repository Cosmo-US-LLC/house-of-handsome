import React from "react";
import { Link } from "react-router-dom";
import { Mail, Facebook, Instagram } from "lucide-react";
import logo from "../../../assets/images/navbar/HOH_Logo.svg";
import findLocationIcon from "../../../assets/images/footer/find-a-location.svg";
import bookReservationIcon from "../../../assets/images/footer/book-a-reservation.svg";
import downloadAppIcon from "../../../assets/images/footer/download-the-app.svg";
import giftCardIcon from "../../../assets/images/footer/buy-a-gift-card.svg";

function Footer() {
  return (
    <footer className="w-full bg-[#f7f7f7] md:py-10 py-8 rounded-tl-[10px] rounded-tr-[10px]">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        {/* Top Action Items */}
        <div className="grid grid-cols-1 gap-8 pb-10 mb-10 border-b border-black/50 md:grid-cols-2 lg:grid-cols-4">
          {/* Find A Location */}
          <div className="flex gap-6 items-center">
            <img
              src={findLocationIcon}
              alt="Find Location Icon"
              className="h-[46px] w-[46px] shrink-0"
            />
            <span className="font-['Urbanist'] text-xl font-extrabold capitalize leading-none text-black">
              Find A Location
            </span>
          </div>

          {/* Book A Reservation */}
          <div className="flex gap-6 items-center">
            <img
              src={bookReservationIcon}
              alt="Book Reservation Icon"
              className="h-[50px] w-[47px] shrink-0"
            />
            <span className="font-['Urbanist'] text-xl font-extrabold capitalize leading-none text-black">
              Book a reservation
            </span>
          </div>

          {/* Download The App */}
          <div className="flex gap-6 items-center">
            <img
              src={downloadAppIcon}
              alt="Download App Icon"
              className="h-[47px] w-[46px] shrink-0"
            />
            <span className="font-['Urbanist'] text-xl font-extrabold capitalize leading-none text-black">
              Download the app
            </span>
          </div>

          {/* Buy A Gift Card */}
          <div className="flex gap-6 items-center">
            <img
              src={giftCardIcon}
              alt="Gift Card Icon"
              className="h-[47px] w-[47px] shrink-0"
            />
            <span className="font-['Urbanist'] text-xl font-extrabold capitalize leading-none text-black">
              Buy a Gift card
            </span>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-6 pb-8 mb-2 md:gap-12 md:mb-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-20">
          {/* Column 1 - Brand */}
          <div className="flex flex-col gap-6">
            {/* Logo */}
            <Link to="/" className="flex gap-2 items-center">
              <img
                src={logo}
                alt="House of Handsome Logo"
                className="w-[80%] h-full shrink-0"
              />
            </Link>

            {/* Description */}
            <p className="font-['Urbanist'] text-base font-medium leading-[26px] text-black">
              At House of Handsome, we aim to revive this sense of camaraderie
              and make it fashionable once again. Welcome to a space where
              tradition meets style, and where every customer becomes part of
              our community.
            </p>

            {/* Social Media */}
            <div className="flex gap-2 items-center">
              <a
                href="mailto:info@houseofhandsome.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-black text-black transition-colors hover:bg-black hover:text-white"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-black text-black transition-colors hover:bg-black hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-black text-black transition-colors hover:bg-black hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="font-['Urbanist'] text-xl font-extrabold leading-none text-black">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-4 font-['Urbanist'] text-base font-normal leading-[22px] text-black">
              <li>
                <Link to="/" className="transition-colors hover:text-[#d82028]">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="transition-colors hover:text-[#d82028]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/locations"
                  className="transition-colors hover:text-[#d82028]"
                >
                  Store Locator
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="transition-colors hover:text-[#d82028]"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div className="flex flex-col gap-6">
            <h3 className="font-['Urbanist'] text-xl font-extrabold leading-none text-black">
              Services
            </h3>
            <ul className="flex flex-col gap-4 font-['Urbanist'] text-base font-normal leading-[22px] text-black">
              <li>
                <Link
                  to="/services"
                  className="transition-colors hover:text-[#d82028]"
                >
                  Cuts
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="transition-colors hover:text-[#d82028]"
                >
                  Style
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="transition-colors hover:text-[#d82028]"
                >
                  Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Our Locations */}
          <div className="flex flex-col gap-6">
            <h3 className="font-['Urbanist'] text-xl font-extrabold leading-none text-black">
              Our Locations
            </h3>
            <ul className="flex flex-col gap-4 font-['Urbanist'] text-base font-normal leading-[22px] text-black">
              <li>
                <Link
                  to="/locations"
                  className="transition-colors hover:text-[#d82028]"
                >
                  Sherwood Park
                </Link>
              </li>
              <li>
                <Link
                  to="/locations"
                  className="transition-colors hover:text-[#d82028]"
                >
                  Spruce Grove
                </Link>
              </li>
              <li>
                <Link
                  to="/locations"
                  className="transition-colors hover:text-[#d82028]"
                >
                  Cameron Heights
                </Link>
              </li>
              <li>
                <Link
                  to="/locations"
                  className="transition-colors hover:text-[#d82028]"
                >
                  Whyte Avenue
                </Link>
              </li>
              <li>
                <Link
                  to="/locations"
                  className="transition-colors hover:text-[#d82028]"
                >
                  Edmonton Downtown
                </Link>
              </li>
              <li>
                <Link
                  to="/locations"
                  className="transition-colors hover:text-[#d82028]"
                >
                  South Common Edmonton
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 justify-between items-center pt-8 border-t border-black/50 md:flex-row">
          <p className="font-['Urbanist'] text-sm font-normal leading-[22px] text-black">
            Copyright © 2025 House of handsome
          </p>
          <div className="flex gap-6 font-['Urbanist'] text-sm font-normal leading-[22px] text-black">
            <Link
              to="/privacy"
              className="transition-colors hover:text-[#d82028]"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="transition-colors hover:text-[#d82028]"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
