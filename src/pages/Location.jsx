import InstaGramSng from "@/assets/images/location/Svgs/InstaGramSng";
import LocationSvg from "@/assets/images/location/Svgs/Location";
import MailSvg from "@/assets/images/location/Svgs/MailSvg";
import PhoneSvg from "@/assets/images/location/Svgs/PhoneSvg";
import React, { useState, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";

import shopImage1 from "@/assets/images/location/shop_image/shop_image1.webp";
import shopImage2 from "@/assets/images/location/shop_image/shop_image2.webp";
import shopImage3 from "@/assets/images/location/shop_image/shop_image3.webp";
import shopImage4 from "@/assets/images/location/shop_image/shop_image4.webp";
import TimeSvg from "@/assets/images/location/Svgs/TimeSvg";
import RatingSvg from "@/assets/images/location/Svgs/RatingSvg";
import DownArrowSvg from "@/assets/images/location/Svgs/DownArrowSvg";
import SEO from "@/components/layout/SEO";

const LOCATIONS = [
  {
    name: "House Of Handsome Cameron Heights",
    address: "625 Cameron Heights Dr NW, Edmonton, Alberta, T6M 0J2, Canada",
    phone: "(780) 489-0329",
    email: "info@houseofhandsome.ca",
    rating: "4.9 from 771 reviews",
    image: shopImage1,
    mapQuery: "625 Cameron Heights Dr NW, Edmonton, Alberta, Canada",
    link: "https://www.phorest.com/salon/houseofhandsomebarbershop2",
    hours: {
      monday: "9 am – 8 pm",
      tuesday: "9 am – 8 pm",
      wednesday: "9 am – 6 pm",
      thursday: "Closed",
      friday: "9 am – 8 pm",
      saturday: "9 am – 7 pm",
      sunday: "10 am – 6 pm",
    },
  },
  {
    name: "House Of Handsome Downtown",
    address: "12328 102 Ave NW, Edmonton, Alberta, T5N 0L9, Canada",
    phone: "(825) 480-2461",
    email: "info@houseofhandsome.ca",
    rating: "5.0 from 47 reviews",
    image: shopImage2,
    mapQuery: "12328 102 Ave NW Edmonton Alberta",
    link: "https://www.phorest.com/salon/houseofhandsomedowntown",
    hours: {
      monday: "9 am – 8 pm",
      tuesday: "9 am – 8 pm",
      wednesday: "9 am – 6 pm",
      thursday: "Closed",
      friday: "9 am – 8 pm",
      saturday: "9 am – 7 pm",
      sunday: "10 am – 6 pm",
    },
  },
  {
    name: "House Of Handsome Sherwood Park",
    address: "99 Wye Rd, Sherwood Park, Alberta, T8B 1C9, Canada",
    phone: "(587) 269-1037",
    email: "info@houseofhandsome.ca",
    rating: "4.9 from 1,055 reviews",
    image: shopImage3,
    mapQuery: "99 Wye Rd Sherwood Park Alberta",
    link: "https://www.phorest.com/salon/houseofhandsomebarbershop",
    hours: {
      monday: "9 am – 8 pm",
      tuesday: "9 am – 8 pm",
      wednesday: "9 am – 6 pm",
      thursday: "Closed",
      friday: "9 am – 8 pm",
      saturday: "9 am – 7 pm",
      sunday: "10 am – 6 pm",
    },
  },
  {
    name: "House Of Handsome South Common",
    address: "1923 98 St NW, Edmonton, Alberta, T6N 1L5, Canada",
    phone: "(825) 401-5517",
    email: "info@houseofhandsome.ca",
    rating: "4.9 from 162 reviews",
    image: shopImage4,
    mapQuery: "1923 98 St NW Edmonton Alberta",
    link: "https://www.phorest.com/salon/houseofhandsomebarbershopsouth",
    hours: {
      monday: "9 am – 8 pm",
      tuesday: "9 am – 8 pm",
      wednesday: "9 am – 6 pm",
      thursday: "Closed",
      friday: "9 am – 8 pm",
      saturday: "9 am – 7 pm",
      sunday: "10 am – 6 pm",
    },
  },
  {
    name: "House Of Handsome Spruce Grove",
    address: "205 Jennifer Heil Way, Spruce Grove, Alberta, T7X 0T3, Canada",
    phone: "(877) 572-0148",
    email: "info@houseofhandsome.ca",
    rating: "4.9 from 599 reviews",
    image: shopImage4,
    mapQuery: "205 Jennifer Heil Way Spruce Grove Alberta",
    link: "https://www.phorest.com/salon/houseofhandsomebarbershop1",
    hours: {
      monday: "9 am – 8 pm",
      tuesday: "9 am – 8 pm",
      wednesday: "9 am – 6 pm",
      thursday: "Closed",
      friday: "9 am – 8 pm",
      saturday: "9 am – 7 pm",
      sunday: "10 am – 6 pm",
    },
  },
  {
    name: "House Of Handsome Whyte Ave",
    address: "10369 78 Ave NW, Edmonton, Alberta, T6E 6T3, Canada",
    phone: "(587) 415-9581",
    email: "info@houseofhandsome.ca",
    rating: "4.9 from 444 reviews",
    image: shopImage4,
    mapQuery: "10369 78 Ave NW Edmonton Alberta",
    link: "https://www.phorest.com/salon/houseofhandsomebarbershopwhyte",
    hours: {
      monday: "9 am – 8 pm",
      tuesday: "9 am – 8 pm",
      wednesday: "9 am – 6 pm",
      thursday: "Closed",
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

  const [selectedLocation, setSelectedLocation] = useState(
    getInitialLocation()
  );
  const locationRefs = useRef({});
  const [openHoursIndex, setOpenHoursIndex] = useState(null);

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

      <section className="pt-0 pb-20 bg-[#F1F1F1] pt-16">
        <div className="max-w-[1280px] mx-auto px-4 ">
          <div className="flex flex-col gap-[7px] max-w-[800px] mx-auto text-center">
            <h1 className="font-['Cairo'] text-[48px] leading-[55px] tracking-[-0.752px] text-[#181818] font-bold">
              Our Locations
            </h1>
            <p className="font-['Urbanist'] md:h-10 text-base font-medium leading-[26px] text-[#181818]">
              Discover our vibrant locations where style meets comfort. Each
              shop is designed to provide a relaxing atmosphere, complete with
              expert barbers ready to craft your perfect look.
            </p>
          </div>
          <div className="md:grid md:grid-cols-2 py-6 px-4 bg-white rounded-2xl mt-12 max-md:space-y-2">
            <div className="mapdiv rounded-xl overflow-hidden md:h-full md:h-[500px] h-[300px] md:min-h-[500px] ">
              <iframe
                key={selectedLocation.mapQuery}
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  selectedLocation.mapQuery
                )}&output=embed`}
                className="w-full h-full max-md:max-h-[400px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="space-y-4 md:max-h-[800px] max-h-[500px] overflow-y-auto md:px-2">
              {LOCATIONS.map((location, index) => (
                <div
                  key={index}
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
                    <div className="space-y-2 flex-1">
                      <h2 className="font-['Urbanist'] text-[18px] font-bold leading-[26px] tracking-[-0.752px] text-[#000000]">
                        {location.name}
                      </h2>

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
                        <div className="flex md:flex-row flex-col gap-2 md:items-center">
                          <button
                            onClick={(e) => {
                              e.stopPropagation(); // prevent selecting card
                              setOpenHoursIndex(
                                openHoursIndex === index ? null : index
                              );
                            }}
                            className="flex items-center gap-2 w-full text-left flex-1"
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
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-none border-2 border-[#d82028] text-[#d82028] hover:bg-[#d82028] hover:text-white max-md:hidden px-2 py-2 rounded-md font-['Urbanist'] text-[14px] font-semibold transition text-center"
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
                              )
                            )}
                          </div>
                        </div>
                        <div>
                         <a
                            href={location.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-none border-2 border-[#d82028] text-[#d82028] hover:bg-[#d82028] hover:text-white px-2 py-2 block rounded-md font-['Urbanist'] text-[14px] font-semibold transition text-center md:hidden"
                          >
                            Book An Appointment
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
