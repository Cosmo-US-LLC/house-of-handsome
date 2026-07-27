import LocationSvg from "@/assets/images/location/Svgs/Location";
import PhoneSvg from "@/assets/images/location/Svgs/PhoneSvg";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import useGeolocation from "@/hooks/useGeolocation";
import { getDistanceKm } from "@/lib/utils";

import mobshop1 from "@/assets/images/location/shop_image/mob-newimage1.webp"
import mobshop2 from "@/assets/images/location/shop_image/mob-newimage2.webp"
import mobshop3 from "@/assets/images/location/shop_image/mob-newimage3.webp"
import mobshop4 from "@/assets/images/location/shop_image/mob-newimage4.webp"
import mobshop5 from "@/assets/images/location/shop_image/mob-newimage5.webp"
import mobshop6 from "@/assets/images/location/shop_image/mob-newimage6.webp"

import shopImage1 from "@/assets/images/location/shop_image/shop_image1.webp";
import shopImage2 from "@/assets/images/location/shop_image/shop_image2.webp";
import shopImage3 from "@/assets/images/location/shop_image/shop_image3.webp";
import shopImage4 from "@/assets/images/location/shop_image/shop_image4.webp";
import shopImage5 from "@/assets/images/location/shop_image/shop_image5.webp";
import shopImageSpruceGrove from "@/assets/images/location/shop_image/shop_image_sprucegrove.png";
import shopImageSouthCommon from "@/assets/images/location/shop_image/shop_image_southcommon.png";
import TimeSvg from "@/assets/images/location/Svgs/TimeSvg";
import RatingSvg from "@/assets/images/location/Svgs/RatingSvg";
import DownArrowSvg from "@/assets/images/location/Svgs/DownArrowSvg";
import DirectionSvg from "@/assets/images/location/Svgs/DirectionSvg";
import SEO from "@/components/layout/SEO";

// Short name for mobile card overlay (e.g. "House Of Handsome Sherwood Park" → "Sherwood Park")
const getLocationShortName = (name) =>
  name.replace(/^House Of Handsome\s+/i, "").trim() || name;

const LOCATIONS = [
  {
    name: "House Of Handsome Sherwood Park",
    lat: 53.511404,
    lng: -113.331886,
    address: "99 Wye Rd, Sherwood Park, Alberta, T8B 1C9, Canada",
    phone: "(587) 269-1037",
    email: "info@houseofhandsome.ca",
    rating: "4.9 from 1,055 reviews",
    image: shopImage1,
    mobileImage: mobshop1, // TODO: replace with mobile-specific image
    mapQuery: "99 Wye Rd Sherwood Park Alberta",
    mobileMapQuery:
      "https://www.google.com/maps/place/House+of+Handsome+Barbershop/@53.511404,-113.331886,17z/data=!3m1!4b1!4m6!3m5!1s0x53a01796db51b319:0x10e5ade866edf0cc!8m2!3d53.511404!4d-113.331886!16s%2Fg%2F11c70cd4hj?entry=ttu&g_ep=EgoyMDI2MDIxNi4wIKXMDSoASAFQAw%3D%3D",
    link: "https://www.phorest.com/salon/houseofhandsomebarbershop",
    hours: {
      monday: "9 am – 8 pm",
      tuesday: "9 am – 8 pm",
      wednesday: "9 am – 6 pm",
      thursday: "9 am – 8 pm",
      friday: "9 am – 8 pm",
      saturday: "9 am – 7 pm",
      sunday: "10 am – 6 pm",
    },
  },
  {
    name: "House Of Handsome Whyte Ave",
    lat: 53.5139298,
    lng: -113.496912,
    address: "10369 78 Ave NW, Edmonton, Alberta, T6E 6T3, Canada",
    phone: "(587) 415-9581",
    email: "info@houseofhandsome.ca",
    rating: "4.9 from 444 reviews",
    image: shopImage2,
    mobileImage: mobshop2, // TODO: replace with mobile-specific image
    mapQuery: "10369 78 Ave NW Edmonton Alberta",
    mobileMapQuery:
      "https://www.google.com/maps/place/House+of+Handsome+Barbershop/@53.5139298,-113.496912,17z/data=!3m1!4b1!4m6!3m5!1s0x53a023da737d6f13:0x86e6796deefbe987!8m2!3d53.5139298!4d-113.496912!16s%2Fg%2F11krs6ktn2?entry=ttu&g_ep=EgoyMDI2MDIxNi4wIKXMDSoASAFQAw%3D%3D",
    link: "https://www.phorest.com/salon/houseofhandsomebarbershopwhyte",
    hours: {
      monday: "9 am – 8 pm",
      tuesday: "9 am – 8 pm",
      wednesday: "9 am – 8 pm",
      thursday: "9 am – 8 pm",
      friday: "9 am – 8 pm",
      saturday: "9 am – 7 pm",
      sunday: "10 am – 6 pm",
    },
  },
  {
    name: "House Of Handsome Cameron Heights",
    lat: 53.4703008,
    lng: -113.6313164,
    address: "625 Cameron Heights Dr NW, Edmonton, Alberta, T6M 0J2, Canada",
    phone: "(780) 489-0329",
    email: "info@houseofhandsome.ca",
    rating: "4.9 from 771 reviews",
    image: shopImage3,
    mobileImage: mobshop3, // TODO: replace with mobile-specific image
    mapQuery: "625 Cameron Heights Dr NW, Edmonton, Alberta, Canada",
    mobileMapQuery:
      "https://www.google.com/maps/place/House+of+Handsome+Barbershop/@53.4703008,-113.6313164,17z/data=!3m1!4b1!4m6!3m5!1s0x539ff567818cac61:0x571a642a27e25d85!8m2!3d53.4703008!4d-113.6313164!16s%2Fg%2F11tmwkgpwh?entry=ttu&g_ep=EgoyMDI2MDIxNi4wIKXMDSoASAFQAw%3D%3D",
    link: "https://www.phorest.com/salon/houseofhandsomebarbershop2",
    hours: {
      monday: "9 am – 8 pm",
      tuesday: "9 am – 8 pm",
      wednesday: "9 am – 8 pm",
      thursday: "9 am – 8 pm",
      friday: "9 am – 8 pm",
      saturday: "9 am – 7 pm",
      sunday: "10 am – 6 pm",
    },
  },
  {
    name: "House Of Handsome South Common",
    lat: 53.4485897,
    lng: -113.4835165,
    address: "1923 98 St NW, Edmonton, Alberta, T6N 1L5, Canada",
    phone: "(825) 401-5517",
    email: "info@houseofhandsome.ca",
    rating: "4.9 from 162 reviews",
    image: shopImageSouthCommon,
    mobileImage: mobshop4, // TODO: replace with mobile-specific image
    mapQuery: "1923 98 St NW Edmonton Alberta",
    mobileMapQuery:
      "https://www.google.com/maps/place/House+of+Handsome+Barbershop/@53.4485897,-113.4835165,17z/data=!3m1!4b1!4m6!3m5!1s0x53a01fd7924b02d9:0xa3fcf0da373fc3b9!8m2!3d53.4485897!4d-113.4835165!16s%2Fg%2F11wfk1bwgx?entry=ttu&g_ep=EgoyMDI2MDIxNi4wIKXMDSoASAFQAw%3D%3D",
    link: "https://www.phorest.com/salon/houseofhandsomebarbershopsouth",
    hours: {
      monday: "9 am – 8 pm",
      tuesday: "9 am – 8 pm",
      wednesday: "9 am – 8 pm",
      thursday: "9 am – 8 pm",
      friday: "9 am – 8 pm",
      saturday: "9 am – 7 pm",
      sunday: "10 am – 6 pm",
    },
  },
  {
    name: "House Of Handsome Downtown",
    lat: 53.5475,
    lng: -113.5207,
    address: "12328 102 Ave NW, Edmonton, Alberta, T5N 0L9, Canada",
    phone: "(825) 480-2461",
    email: "info@houseofhandsome.ca",
    rating: "5.0 from 47 reviews",
    image: shopImage5,
    mobileImage: mobshop5, // TODO: replace with mobile-specific image
    mapQuery: "12328 102 Ave NW Edmonton Alberta",
    mobileMapQuery:
      "https://www.google.com/maps/search/?api=1&query=House%20Of%20Handsome%20Downtown%2C%2012328%20102%20Ave%20NW%20unit%20301%2C%20Edmonton%2C%20Alberta%2C%20T5N%200L9%2C%20Canada%20",
    link: "https://www.phorest.com/salon/houseofhandsomedowntown",
    hours: {
      monday: "9 am – 8 pm",
      tuesday: "9 am – 8 pm",
      wednesday: "9 am – 8 pm",
      thursday: "9 am – 8 pm",
      friday: "9 am – 8 pm",
      saturday: "9 am – 7 pm",
      sunday: "10 am – 6 pm",
    },
  },

  {
    name: "House Of Handsome Spruce Grove",
    lat: 53.5495675,
    lng: -113.9358162,
    address: "205 Jennifer Heil Way, Spruce Grove, Alberta, T7X 0T3, Canada",
    phone: "(877) 572-0148",
    email: "info@houseofhandsome.ca",
    rating: "4.9 from 599 reviews",
    image: shopImageSpruceGrove,
    mobileImage: mobshop6, // TODO: replace with mobile-specific image
    mapQuery: "205 Jennifer Heil Way Spruce Grove Alberta",
    mobileMapQuery:
      "https://www.google.com/maps/place/House+of+Handsome+Barbershop/@53.5495675,-113.9358162,17z/data=!3m1!4b1!4m6!3m5!1s0x539f8f10cbbbb901:0x2095738757446f00!8m2!3d53.5495675!4d-113.9358162!16s%2Fg%2F11nxswp8p5?entry=ttu&g_ep=EgoyMDI2MDIxNi4wIKXMDSoASAFQAw%3D%3D",
    link: "https://www.phorest.com/salon/houseofhandsomebarbershop1",
    hours: {
      monday: "9 am – 8 pm",
      tuesday: "9 am – 8 pm",
      wednesday: "9 am – 8 pm",
      thursday: "9 am – 8 pm",
      friday: "9 am – 8 pm",
      saturday: "9 am – 7 pm",
      sunday: "10 am – 6 pm",
    },
  },
];

// Mapping from home page location IDs to LOCATIONS array indices
const LOCATION_ID_MAP = {
  1: 2, // Sherwood Park -> House Of Handsome Sherwood Park
  2: 4, // Spruce Grove -> House Of Handsome Spruce Grove
  3: 0, // Cameron Heights Edmonton -> House Of Handsome Cameron Heights
  4: 5, // Whyte Avenue Edmonton -> House Of Handsome Whyte Ave
  5: 3, // South Common Edmonton -> House Of Handsome South Common
  6: 1, // Edmonton Downtown -> House Of Handsome Downtown
};

const Location = () => {
  const [searchParams] = useSearchParams();
  const locationId = searchParams.get("location");
  const { coords, loading: geoLoading } = useGeolocation();

  const sortedLocations = useMemo(() => {
    if (!coords) return LOCATIONS;
    return [...LOCATIONS].sort(
      (a, b) =>
        getDistanceKm(coords.lat, coords.lng, a.lat, a.lng) -
        getDistanceKm(coords.lat, coords.lng, b.lat, b.lng),
    );
  }, [coords]);

  // Get initial location from URL parameter or default to first
  const getInitialLocation = () => {
    if (locationId) {
      const locationIndex = LOCATION_ID_MAP[parseInt(locationId)];
      if (locationIndex !== undefined && LOCATIONS[locationIndex]) {
        return LOCATIONS[locationIndex];
      }
    }
    return LOCATIONS[0];
  };

  const [selectedLocation, setSelectedLocation] =
    useState(getInitialLocation());
  const locationRefs = useRef({});
  const [openHoursIndex, setOpenHoursIndex] = useState(null);
  const [openHoursIndexMobile, setOpenHoursIndexMobile] = useState(null);

  // Update selected location when URL parameter changes
  useEffect(() => {
    if (locationId) {
      const locationIndex = LOCATION_ID_MAP[parseInt(locationId)];
      if (locationIndex !== undefined && LOCATIONS[locationIndex]) {
        setSelectedLocation(LOCATIONS[locationIndex]);

        // Scroll to selected location after a short delay to ensure DOM is ready
        setTimeout(() => {
          const locationRef = locationRefs.current[locationIndex];
          if (locationRef) {
            locationRef.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }, 100);
      }
    }
  }, [locationId]);
  return (
    <>
      <SEO
        title="Find a House of Handsome Location Near You"
        description="Locate the nearest House of Handsome barber shop and book your appointment. Our convenient locations ensure you can access top-notch grooming services no matter where you are."
      />

      {/* ==================== DESKTOP ONLY ==================== */}
      <section className="hidden md:block pb-20 pt-16 bg-[#F1F1F1]">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="flex flex-col gap-[7px] max-w-[800px] mx-auto text-center">
            <h1 className="font-['Cairo'] text-[48px] leading-[55px] tracking-[-0.752px] text-[#181818] font-bold">
              Our Locations
            </h1>
            <p className="font-['Urbanist'] h-10 text-base font-medium leading-[26px] text-[#181818]">
              Discover our vibrant locations where style meets comfort. Each
              shop is designed to provide a relaxing atmosphere, complete with
              expert barbers ready to craft your perfect look.
            </p>
          </div>
          <div className="grid grid-cols-2 px-4 py-6 mt-12 bg-white rounded-2xl">
            <div
              id="Map"
              className="mapdiv rounded-xl overflow-hidden h-[800px] min-h-[500px]"
            >
              <iframe
                key={selectedLocation.mapQuery}
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  selectedLocation.mapQuery,
                )}&output=embed`}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="space-y-4 max-h-[800px] overflow-y-auto px-2">
              {geoLoading ? (
                <div className="space-y-4">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="flex gap-4 px-4 py-4 rounded-xl animate-pulse"
                    >
                      <div className="w-[130px] h-[90px] bg-gray-200 rounded-lg shrink-0" />
                      <div className="flex-1 py-1 space-y-3">
                        <div className="w-3/4 h-4 bg-gray-200 rounded" />
                        <div className="w-full h-3 bg-gray-200 rounded" />
                        <div className="w-1/2 h-3 bg-gray-200 rounded" />
                        <div className="w-2/3 h-3 bg-gray-200 rounded" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                sortedLocations.map((location, index) => (
                  <div
                    key={location.name}
                    ref={(el) => (locationRefs.current[index] = el)}
                  >
                    <div
                      className={`flex md:flex-row flex-col gap-4 px-4 py-4 rounded-xl cursor-pointer transition ${
                        selectedLocation.name === location.name
                          ? "bg-[#F6F6F6]"
                          : "hover:bg-[#F6F6F6]"
                      }`}
                      onClick={() => setSelectedLocation(location)}
                    >
                      {/* Image */}
                      <div className="image">
                        <img
                          src={location.image}
                          alt={location.name}
                          className="md:w-[130px]"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <h2 className="font-['Urbanist'] text-[18px] font-bold leading-[26px] tracking-[-0.752px] text-[#000000]">
                            {location.name}
                          </h2>
                          {coords && index === 0 && (
                            <span className="bg-[#d82028] text-white font-['Urbanist'] text-[11px] font-semibold px-2 py-0.5 rounded-full leading-none">
                              Nearest to you
                            </span>
                          )}
                        </div>

                        <p className="font-['Urbanist'] text-[16px] leading-[22px] text-[#000000] flex items-center gap-2">
                          <LocationSvg />{" "}
                          <span className="flex-1">{location.address}</span>
                        </p>

                        <p className="font-['Urbanist'] text-[16px] leading-[22px] text-[#000000] flex items-center gap-2">
                          <PhoneSvg />{" "}
                          <span className="flex-1">{location.phone}</span>
                        </p>

                        {/* <p className="font-['Urbanist'] text-[16px] leading-[22px] text-[#000000] flex items-center gap-2">
                      <MailSvg /> <span className="flex-1">{location.email}</span>
                    </p> */}
                        <p className="font-['Urbanist'] text-[16px] leading-[22px] text-[#000000] flex items-center gap-2">
                          <RatingSvg />{" "}
                          <span className="flex-1">{location.rating}</span>
                        </p>

                        {/* Opening Hours */}
                        {/* <div className="font-['Urbanist'] text-[16px] leading-[22px] text-[#000000] space-y-2">
                      <p className="flex gap-2">
                        <TimeSvg className="mt-[3px]" />
                        Working Hours <DownArrowSvg className="mt-[3px]" />
                      </p>
                      <div className="flex flex-col">
                        {Object.entries(location.hours).map(([day, time]) => (
                          <p key={day} className="flex">
                            <span className="capitalize font-medium block w-[100px]">{day}:</span> {time}
                          </p>
                        ))}
                      </div>
                    </div> */}
                        <div className="font-['Urbanist'] text-[16px] leading-[22px] text-[#000000] space-y-2">
                          <div className="flex flex-col gap-2 md:flex-row md:items-center">
                            <button
                              onClick={(e) => {
                                e.stopPropagation(); // prevent selecting card
                                setOpenHoursIndex(
                                  openHoursIndex === index ? null : index,
                                );
                              }}
                              className="flex items-center flex-1 w-full gap-2 text-left"
                            >
                              <TimeSvg className="" />
                              <span className="">Working Hours</span>
                              <DownArrowSvg
                                className={` transition-transform duration-300 ${
                                  openHoursIndex === index ? "" : "rotate-180"
                                }`}
                              />
                            </button>
                            <a
                              href={location.link}
                              target=""
                              rel="noopener noreferrer"
                              className="bg-none border-2 border-[#d82028] text-[#d82028] hover:bg-[#d82028] hover:text-white px-2 py-2 rounded-md font-['Urbanist'] text-[14px] font-semibold transition text-center"
                            >
                              Book An Appointment
                            </a>
                          </div>

                          {/* Dropdown */}
                          <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                              openHoursIndex === index
                                ? "max-h-[500px] opacity-100 mt-2"
                                : "max-h-0 opacity-0"
                            }`}
                          >
                            <div className="flex flex-col gap-1">
                              {Object.entries(location.hours).map(
                                ([day, time]) => (
                                  <p key={day} className="flex">
                                    <span className="capitalize font-medium block w-[100px]">
                                      {day}:
                                    </span>
                                    {time}
                                  </p>
                                ),
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MOBILE ONLY ==================== */}
      <section className="md:hidden pb-20 pt-[20px] bg-[#FFF]">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="flex flex-col gap-[7px] max-w-[800px] mx-auto text-center">
            <h1 className="font-['Cairo'] text-[36px] leading-[48px] font-[700] text-[#181818] uppercase">
              Our Locations
            </h1>
            <p className="font-['Urbanist'] text-[16px] leading-[26px] text-[#181818]">
              Discover our vibrant locations where style means comfort. Each
              shop is designed to provide an inviting atmosphere, complete with
              expert barbers ready to craft your perfect look.
            </p>
          </div>
          {/* Mobile: location cards (Figma 1898-5415) */}
          <div className="mt-4 space-y-4">
            {geoLoading ? (
              <div className="mt-4 space-y-4">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="bg-[#F6F6F6] rounded-[12px] p-4 animate-pulse"
                  >
                    <div className="w-full h-[220px] bg-gray-200 rounded-[8px] mb-6" />
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <div className="w-6 h-6 bg-gray-200 rounded shrink-0" />
                        <div className="flex-1 space-y-2">
                          <div className="w-full h-3 bg-gray-200 rounded" />
                          <div className="w-3/4 h-3 bg-gray-200 rounded" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gray-200 rounded shrink-0" />
                        <div className="w-1/2 h-3 bg-gray-200 rounded" />
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gray-200 rounded shrink-0" />
                        <div className="w-1/3 h-3 bg-gray-200 rounded" />
                      </div>
                      <div className="flex gap-3 mt-2">
                        <div className="flex-1 h-11 bg-gray-300 rounded-[10px]" />
                        <div className="flex-1 h-11 bg-gray-200 rounded-[10px]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              sortedLocations.map((location, index) => (
                <div
                  key={location.name}
                  ref={(el) => (locationRefs.current[index] = el)}
                  className="bg-[#F6F6F6] rounded-[12px] p-4 overflow-hidden"
                >
                  {/* Image: full width, rounded top corners only (Figma) */}
                  <div className="relative mb-6 rounded-[8px] overflow-hidden">
                    <img
                      src={location.mobileImage}
                      alt={location.name}
                      className="w-full h-[220px] object-center object-cover rounded-[8px]"
                    />
                    <div className="absolute h-[100px] flex flex-col justify-center bottom-0 left-0 right-0 p-4  text-white">
                      <div className="flex items-center gap-2">
                        <h2 className="font-['Urbanist'] text-[#fff] text-[16px] font-[700] tracking-[0.552px] leading-[26px]">
                          {getLocationShortName(location.name)}
                        </h2>
                        {coords && index === 0 && (
                          <span className="bg-[#d82028] text-white font-['Urbanist'] text-[10px] font-semibold px-2 py-0.5 rounded-full leading-none border border-white/40">
                            Nearest
                          </span>
                        )}
                      </div>
                      <p className="font-['Urbanist'] text-[#FFFFFF] text-[14px] font-[500] leading-[20px] flex items-center gap-1.5 mt-1 [&_svg]:stroke-amber-400 [&_svg]:fill-[#FBBC05] [&_svg_path]:stroke-amber-400 [&_svg_path]:fill-amber-400">
                        <RatingSvg />
                        <span>{location.rating}</span>
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="font-['Urbanist'] text-[#000000] text-[14px] font-[400] leading-[20px] flex items-start gap-2">
                      <div className="w-[28px] h-[28px]">
                        <LocationSvg className="shrink-0 mt-0.5" />
                      </div>
                      <span>{location.address}</span>
                    </p>
                    <p className="font-['Urbanist'] text-[#181818] text-[14px] font-[400] leading-[20px] flex items-center gap-2">
                      <PhoneSvg />
                      <span>{location.phone}</span>
                    </p>

                    {/* Working Hours: label + expandable list (day left, time right) */}
                    <div className="font-['Urbanist'] text-[#181818] text-sm">
                      <div className="flex items-center gap-2 text-[#000000] text-[14px] font-[400] leading-[20px]">
                        <TimeSvg className="shrink-0" />
                        <span>Working Hours</span>
                      </div>
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          openHoursIndexMobile === index
                            ? "max-h-[500px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="pt-4 pb-2 space-y-1.5">
                          {Object.entries(location.hours).map(([day, time]) => (
                            <p
                              key={day}
                              className="flex gap-10 text-[#000000] text-[14px] font-[400] leading-[20px]"
                            >
                              <span className="capitalize font-medium w-[60px]">
                                {day}:
                              </span>
                              <span>{time}</span>
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* BOOK NOW + DIRECTION (Figma: red solid + white/black border) */}
                    <div className="flex gap-3">
                      <a
                        href={location.link}
                        target="_self"
                        rel="noopener noreferrer"
                        className="flex-1 bg-[#D82028] text-white font-['Urbanist'] text-[14px] font-[500] leading-[19px] uppercase py-3 px-4 rounded-[10px] text-center hover:opacity-90 transition"
                      >
                        Book Now
                      </a>
                      <a
                        href={location.mobileMapQuery}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-white border border-[#181818] text-[#181818] font-['Urbanist'] text-[14px] font-[500] leading-[20px] uppercase py-3 px-4 rounded-[10px] text-center flex items-center justify-center gap-2 hover:bg-[#F8F8F8] transition"
                      >
                        <DirectionSvg />
                        Direction
                      </a>
                    </div>

                    {/* SEE LESS / SEE MORE centered below buttons (Figma) */}
                    <div className="text-center">
                      <button
                        type="button"
                        onClick={() =>
                          setOpenHoursIndexMobile(
                            openHoursIndexMobile === index ? null : index,
                          )
                        }
                        className="text-[#D82028] font-[400] text-[14px] leading-[19px] uppercase hover:underline"
                      >
                        {openHoursIndexMobile === index
                          ? "SEE LESS"
                          : "SEE MORE"}
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
