import InstaGramSng from "@/assets/images/location/Svgs/InstaGramSng";
import LocationSvg from "@/assets/images/location/Svgs/Location";
import MailSvg from "@/assets/images/location/Svgs/MailSvg";
import PhoneSvg from "@/assets/images/location/Svgs/PhoneSvg";
import React, { useState } from "react";

import shopImage1 from "@/assets/images/location/shop_image/shop_image1.webp";
import shopImage2 from "@/assets/images/location/shop_image/shop_image2.webp";
import shopImage3 from "@/assets/images/location/shop_image/shop_image3.webp";
import shopImage4 from "@/assets/images/location/shop_image/shop_image4.webp";

const LOCATIONS = [
  {
    name: "House Of Handsome Cameron Heights",
    address: "625 Cameron Heights Dr NW, Edmonton, Alberta, T6M 0J2, Canada",
    phone: "(780) 489-0329",
    email: "info@houseofhandsome.ca",
    image: shopImage1,
    mapQuery: "625 Cameron Heights Dr NW, Edmonton, Alberta, Canada",
  },
  {
    name: "House Of Handsome Downtown",
    address: "12328 102 Ave NW unit 301, Edmonton, Alberta, T5N 0L9, Canada",
    phone: "(825) 480-2461",
    email: "info@houseofhandsome.ca",
    image: shopImage2,
    mapQuery: "12328 102 Ave NW Edmonton Alberta",
  },
  {
    name: "House Of Handsome Sherwood Park",
    address: "99 Wye Rd, Unit 11, Sherwood Park, Alberta, T8B 1C9, Canada",
    phone: "(587) 269-1037",
    email: "info@houseofhandsome.ca",
    image: shopImage3,
    mapQuery: "99 Wye Rd Sherwood Park Alberta",
  },
  {
    name: "House Of Handsome South Common",
    address: "1923 98 St NW, Edmonton, Alberta, T6N 1L5, Canada",
    phone: "(825) 401-5517",
    email: "info@houseofhandsome.ca",
    image: shopImage4,
    mapQuery: "1923 98 St NW Edmonton Alberta",
  },
  {
    name: "House Of Handsome Spruce Grove",
    address: "205 Jennifer Heil Way, Spruce Grove, Alberta, T7X 0T3, Canada",
    phone: "(877) 572-0148",
    email: "info@houseofhandsome.ca",
    image: shopImage4,
    mapQuery: "205 Jennifer Heil Way Spruce Grove Alberta",
  },
  {
    name: "House Of Handsome Whyte Ave",
    address: "10369 78 Ave NW, Edmonton, Alberta, T6E 6T3, Canada",
    phone: "(587) 415-9581",
    email: "info@houseofhandsome.ca",
    image: shopImage4, 
    mapQuery: "10369 78 Ave NW Edmonton Alberta",
  },
];

const Location = () => {
  const [selectedLocation, setSelectedLocation] = useState(LOCATIONS[0]);
  return (
    <section className="pt-0 pb-20 bg-[#F1F1F1]">
      <div className="max-w-[1280px] mx-auto px-4 ">
        <div className="flex flex-col gap-[7px] max-w-[800px] mx-auto text-center">
          <h3 className="font-['Cairo'] text-[48px] leading-[55px] tracking-[-0.752px] text-[#d82028]">
            Our Locations
          </h3>
          <p className="font-['Urbanist'] h-10 text-base font-medium leading-[26px] text-[#181818]">
            Discover our vibrant locations where style meets comfort. Each shop
            is designed to provide a relaxing atmosphere, complete with expert
            barbers ready to craft your perfect look.
          </p>
        </div>
        <div className="md:grid md:grid-cols-2 py-6 px-4 bg-white rounded-2xl mt-12 max-md:space-y-2">
          <div className="mapdiv rounded-xl overflow-hidden md:h-full h-[500px] md:min-h-[500px] min-h-[500px]">
            <iframe
              key={selectedLocation.mapQuery}
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                selectedLocation.mapQuery
              )}&output=embed`}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="space-y-4 max-h-[800px] overflow-y-auto md:px-2">
            {LOCATIONS.map((location, index) => (
              <div key={index}>
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
                    <h4 className="font-['Urbanist'] text-[18px] font-bold leading-[26px] tracking-[-0.752px] text-[#000000]">
                      {location.name}
                    </h4>

                    <p className="font-['Urbanist'] text-[16px] leading-[22px] text-[#000000] flex items-center gap-2">
                      <LocationSvg /> {location.address}
                    </p>

                    <p className="font-['Urbanist'] text-[16px] leading-[22px] text-[#000000] flex items-center gap-2">
                      <PhoneSvg /> {location.phone}
                    </p>

                    <p className="font-['Urbanist'] text-[16px] leading-[22px] text-[#000000] flex items-center gap-2">
                      <MailSvg /> {location.email}
                    </p>
                    <p className="font-['Urbanist'] text-[16px] leading-[22px] text-[#000000] flex items-center gap-2">
                      <InstaGramSng /> Sat-Sun: 10am - 6pm
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
