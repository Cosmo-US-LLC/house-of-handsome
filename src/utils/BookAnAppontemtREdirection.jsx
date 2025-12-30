export const handleRedirectOfBookAppontment = () => {
  window.open(
    "https://www.phorest.com/salon/houseofhandsomebarbershop2/locations",
    "_blank",
    "noopener,noreferrer"
  );
};

export const ScrolldownToFranchiseForm = () => {
  const franchiseForm = document.getElementById("franchiseForm");
  if (franchiseForm) {
    franchiseForm.scrollIntoView({ behavior: "smooth" });
  }
};
