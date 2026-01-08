import React, { useState, useRef, useEffect } from "react";
import DownArrowSvg from "@/assets/images/location/Svgs/DownArrowSvg";
import LocationSvg from "@/assets/images/location/Svgs/Location";
import PhoneSvg from "@/assets/images/location/Svgs/PhoneSvg";
import RatingSvg from "@/assets/images/location/Svgs/RatingSvg";
import TimeSvg from "@/assets/images/location/Svgs/TimeSvg";

const SNAP_POINTS = {
  PEEK: 100,
  MID: 350,
  FULL: 600,
};

const DRAG_SENSITIVITY = 1.35; // 👈 makes drag lighter
const SCROLL_TRIGGER = 60; // px before auto-expand

const LocationsDrawer = ({
  locations,
  setSelectedLocation,
  selectedLocation,
}) => {
  const [height, setHeight] = useState(SNAP_POINTS.PEEK); // 👈 start peek
  const [openHoursIndex, setOpenHoursIndex] = useState(null);

  const startY = useRef(0);
  const startHeight = useRef(0);
  const isDragging = useRef(false);
  const dragDirection = useRef(null);
  const hasAutoExpanded = useRef(false);

  const ScrolldownToMap = () => {
    const element = document.getElementById("Map");
    if (!element) return;

    const yOffset = -80; // adjust if you have sticky header
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  /* ---------------- AUTO EXPAND ON SCROLL ---------------- */

  useEffect(() => {
    const onScroll = () => {
      if (
        window.scrollY > SCROLL_TRIGGER &&
        height === SNAP_POINTS.PEEK &&
        !hasAutoExpanded.current
      ) {
        setHeight(SNAP_POINTS.MID);
        hasAutoExpanded.current = true;
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [height]);

  /* ---------------- DRAG LOGIC ---------------- */

  const onDragStart = (e) => {
    isDragging.current = false;
    dragDirection.current = null;

    startY.current = e.touches ? e.touches[0].clientY : e.clientY;
    startHeight.current = height;

    document.addEventListener("mousemove", onDragMove);
    document.addEventListener("mouseup", onDragEnd);
    document.addEventListener("touchmove", onDragMove, { passive: false });
    document.addEventListener("touchend", onDragEnd);
  };

  const onDragMove = (e) => {
    const currentY = e.touches ? e.touches[0].clientY : e.clientY;
    let delta = (startY.current - currentY) * DRAG_SENSITIVITY;

    if (Math.abs(delta) > 3) {
      isDragging.current = true;
      dragDirection.current = delta > 0 ? "up" : "down";
    }

    // Soft resistance near edges
    if (
      (startHeight.current === SNAP_POINTS.PEEK && delta < 0) ||
      (startHeight.current === SNAP_POINTS.FULL && delta > 0)
    ) {
      delta *= 0.35;
    }

    setHeight(
      Math.min(
        SNAP_POINTS.FULL,
        Math.max(SNAP_POINTS.PEEK, startHeight.current + delta)
      )
    );
  };

  const onDragEnd = () => {
    document.removeEventListener("mousemove", onDragMove);
    document.removeEventListener("mouseup", onDragEnd);
    document.removeEventListener("touchmove", onDragMove);
    document.removeEventListener("touchend", onDragEnd);

    if (!isDragging.current) return;

    const snaps = Object.values(SNAP_POINTS).sort((a, b) => a - b);
    const currentIndex = snaps.findIndex((p) => p === startHeight.current);

    let nextIndex = currentIndex;

    if (dragDirection.current === "up") {
      nextIndex = Math.min(currentIndex + 1, snaps.length - 1);
    }

    if (dragDirection.current === "down") {
      nextIndex = Math.max(currentIndex - 1, 0);
    }

    setHeight(snaps[nextIndex]);
  };

  /* ---------------- HANDLE TAP ---------------- */

  const onHandleClick = () => {
    if (isDragging.current) return;
    if (height === SNAP_POINTS.PEEK) {
      setHeight(SNAP_POINTS.MID);
    }
  };

  /* ---------------- CARD CLICK ---------------- */

  const collapseToPeek = () => {
    setHeight(SNAP_POINTS.PEEK);
  };

  /* ---------------- RENDER ---------------- */

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl shadow-xl"
      style={{
        height,
        transition: "height 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)", // 👈 smoother
      }}
    >
      {/* Drag Handle */}
      <div
        onMouseDown={onDragStart}
        onTouchStart={onDragStart}
        onClick={onHandleClick}
        className="flex justify-center pt-4 pb-3 cursor-grab active:cursor-grabbing touch-none"
      >
        <div className="h-1.5 w-12 rounded-full bg-neutral-300" />
      </div>

      {/* Content */}
      <div className="h-[calc(100%-32px)] overflow-hidden">
        <div className="mx-auto w-full max-w-sm h-full">
          <div className="space-y-4 max-h-full overflow-y-auto px-4 pb-6">
            {locations.map((location, index) => (
              <div
                key={index}
                onClick={() => {
                  collapseToPeek();
                  setSelectedLocation(location);
                  ScrolldownToMap();
                }}
                className={`flex md:flex-row flex-col gap-4 px-4 py-4 rounded-xl cursor-pointer transition ${
                  selectedLocation && selectedLocation.name === location.name
                    ? "bg-[#F6F6F6]"
                    : "hover:bg-neutral-50"
                }`}
              >
                <img
                  src={location.image}
                  alt={location.name}
                  className="md:w-[130px] w-full h-[200px] object-cover rounded-md"
                />

                <div className="space-y-2 flex-1">
                  <h2 className="font-bold">{location.name}</h2>

                  <p className="flex gap-2 text-sm">
                    <LocationSvg /> {location.address}
                  </p>

                  <p className="flex gap-2 text-sm">
                    <PhoneSvg /> {location.phone}
                  </p>

                  <p className="flex gap-2 text-sm">
                    <RatingSvg /> {location.rating}
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenHoursIndex(
                        openHoursIndex === index ? null : index
                      );
                    }}
                    className="flex items-center gap-2 text-sm"
                  >
                    <TimeSvg />
                    Working Hours
                    <DownArrowSvg
                      className={`transition-transform ${
                        openHoursIndex === index ? "" : "rotate-180"
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openHoursIndex === index ? "max-h-[500px]" : "max-h-0"
                    }`}
                  >
                    {Object.entries(location.hours).map(([day, time]) => (
                      <p key={day} className="text-sm ">
                        <strong><span className="capitalize">{day}</span>:</strong> {time}
                      </p>
                    ))}
                  </div>

                  <a
                    onClick={(e) => e.stopPropagation()}
                    href={location.link}
                    target="_self"
                    rel="noopener noreferrer"
                    className="block border-2 border-[#d82028] text-[#d82028] hover:bg-[#d82028] hover:text-white px-3 py-2 rounded-md text-center text-sm font-semibold transition"
                  >
                    Book An Appointment
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationsDrawer;
