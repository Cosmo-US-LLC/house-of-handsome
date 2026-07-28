export const handleRedirectOfBookAppontment = () => {
  window.location.href = "https://www.phorest.com/salon/houseofhandsomebarbershop2/locations";
};

// export const ScrolldownToFranchiseForm = () => {
//   const franchiseForm = document.getElementById("franchiseForm");
//   if (franchiseForm) {
//     franchiseForm.scrollIntoView({ behavior: "smooth" });
//   }
// };

export const ScrolldownToFranchiseForm = () => {
  const element = document.getElementById("franchiseForm");
  if (!element) return;

  const yOffset = -80; // adjust if you have sticky header
  const y =
    element.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};

export const ScrolldownToCuts = () => {
  const element = document.getElementById("cuts");
  if (!element) return;

  const yOffset = -80; // adjust if you have sticky header
  const y =
    element.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};

export const ScrolldownTostrategicExpansion= () => {
  const element = document.getElementById("strategic-expansion");
  if (!element) return;

  const yOffset = -80; // adjust if you have sticky header
  const y =
    element.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};


// export const ScrolldownToFranchiseForm = () => {
//   const el = document.getElementById("franchiseForm");
//   if (!el) return;

//   requestAnimationFrame(() => {
//     const y = el.getBoundingClientRect().top + window.pageYOffset;
//     window.scrollTo({ top: y, behavior: "smooth" });
//   });
// };


