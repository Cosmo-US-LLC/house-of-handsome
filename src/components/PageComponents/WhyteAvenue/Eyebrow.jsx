function Eyebrow({ children, center = false }) {
  return (
    <div
      className={`font-['Urbanist'] text-[13px] font-bold tracking-[0.08em] uppercase text-[#d82028] mb-3 ${
        center ? "text-center" : ""
      }`}
    >
      {children}
    </div>
  );
}

export default Eyebrow;
