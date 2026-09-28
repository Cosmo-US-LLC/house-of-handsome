export const ADDRESS_PARTS = {
  street: "625 Cameron Heights Dr NW",
  city: "Edmonton",
  region: "AB",
  postalCode: "T6M 0J2",
};
export const ADDRESS = `${ADDRESS_PARTS.street}, ${ADDRESS_PARTS.city}, ${ADDRESS_PARTS.region} ${ADDRESS_PARTS.postalCode}`;
export const PHONE = "(780) 489-0329";
export const PHONE_HREF = "tel:+17804890329";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(`House of Handsome Barbershop, ${ADDRESS}`);

export const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Find Us", href: "#find" },
];

export const PILLARS = [
  { title: "Cuts", body: "Masterful cuts tailored to your style and personality." },
  { title: "Beard", body: "Elevating your beard to perfection with precision and care." },
  { title: "Care", body: "A holistic approach to rejuvenation for anyone who takes their look seriously." },
];

// Item names follow Phorest, with typos corrected (Phorest to be updated to match).
// Removed on purpose: "Festive Grooming Package" ($139.00) is seasonal and hidden for now.
export const SERVICE_CATEGORIES = [
  {
    id: "haircut",
    name: "Haircut",
    items: [
      { name: "Regular Haircut", price: "$38.99" },
      { name: "Fade Haircut", price: "$42.99" },
      { name: "Skin Fade Haircut", price: "$45.99" },
      { name: "Buzz Cut with Fade", price: "$32.99" },
      { name: "Buzz Cut", price: "$25.99" },
      { name: "Seniors' Haircut", price: "$29.99" },
      { name: "Youth Cut", price: "$34.99" },
      { name: "Kids (12 and Under)", price: "$29.99" },
      { name: "Men Long Hair Scissor Haircut", price: "$45.99" },
      { name: "Boulder Full Head Shave (Foil Shaver)", price: "$33.99" },
      { name: "Hot Towel Head Shave", price: "$45.99" },
      { name: "Shampoo", price: "$7.00" },
    ],
  },
  {
    id: "colour-bleach",
    name: "Colour / Bleach",
    items: [
      { name: "Solid Colour", price: "$54.99" },
      { name: "Colour Short Beard", price: "$39.99" },
      { name: "Colour Long Beard", price: "$49.99" },
    ],
  },
  {
    id: "hairstyling",
    name: "Hairstyling",
    items: [{ name: "Women Scissor Cut/Wash/Style", price: "$69.99" }],
  },
  {
    id: "wellness-grooming",
    name: "Wellness & Grooming Packages",
    items: [
      { name: "Head-to-face Refresh", price: "$99.00" },
      { name: "King's Package", price: "$99.00" },
      { name: "The Dapper Detox", price: "$115.00" },
      { name: "The Dapper Gentleman's Treatment", price: "$165.00" },
      { name: "Scalp Treatment/Massage", price: "$35.00" },
    ],
  },
  {
    id: "beard-grooming",
    name: "Beard Grooming",
    items: [
      { name: "Regular Beard Trim", price: "$17.99" },
      { name: "Beard Trimming & Shaping (w/ Clippers, Trimmers & Scissors)", price: "$23.99" },
      { name: "Long Beard Trimming & Shaping Over Two Inches (w/ Clippers, Trimmers & Scissors)", price: "$27.99" },
      { name: "Beard Trimming & Shaping (w/ Hot Towel & Straight Razor)", price: "$32.99" },
      { name: "Over Two Inches Long (w/ Hot Towel & Straight Razor)", price: "$36.99" },
      { name: "Hot Shave & Goatee Sculpt", price: "$39.99" },
      { name: "Full Hot Shave (Face or Head)", price: "$45.99" },
    ],
  },
  {
    id: "facial-wax",
    name: "Facial Wax",
    items: [
      { name: "All Four Areas", price: "$36.00" },
      { name: "Ears (Auricle & Outer Ear Canal)", price: "$12.00" },
      { name: "Eyebrows (Including Forehead)", price: "$12.00" },
      { name: "Nostrils (Inner Nose)", price: "$12.00" },
      { name: "Upper Cheeks (Including Tip of Nose)", price: "$12.00" },
    ],
  },
  {
    id: "facial-care",
    name: "Facial Care",
    items: [
      { name: "Hot Steam Facial Scrub", price: "$55.00" },
      { name: "Hot Towel Black Mask Facial", price: "$25.00" },
      { name: "Signature Facial", price: "$85.00" },
      { name: "Cleansing Facial", price: "$129.00" },
    ],
  },
  {
    id: "body-waxing",
    name: "Body Waxing",
    items: [
      { name: "Full Arms", price: "$70.00" },
      { name: "Full Back", price: "$75.00" },
      { name: "Full Chest & Stomach", price: "$80.00" },
      { name: "Half Arms", price: "$40.00" },
      { name: "Lower Back", price: "$35.00" },
      { name: "Partial Chest", price: "$35.00" },
      { name: "Partial Stomach", price: "$35.00" },
      { name: "Shoulders", price: "$35.00" },
      { name: "Underarms", price: "$25.00" },
      { name: "Upper Back", price: "$45.00" },
    ],
  },
  {
    id: "add-ons",
    name: "Add-Ons",
    items: [
      { name: "The Gentleman", price: "$25.00" },
      { name: "The Rejuve", price: "$75.00" },
      { name: "The Youthful", price: "$99.00" },
    ],
  },
];

// Real Google reviews from the Cameron Heights listing, quoted exactly and credited by first name,
// newest first. Only reviews that name barbers on the Cameron Heights Phorest staff list (or none) are used.
export const REVIEWS = [
  {
    text: "Ehsan gave me a fade to perfection. He listened to my concerns and took everything into consideration. I left refreshed and satisfied with the quality of the cut. Hard to try and find a barber these days but I will definitely be back. Also side note. There was someone next to me with a child getting their cut done as well and Ryan handled the interaction beautifully. So great for the kids as well! If I could give 6 stars. I would.",
    author: "Brandon",
  },
  {
    text: "Knows exactly how I want. My hair done comes out perfect every time. Definitely recommend Ryan’s  services to other clients. Easy to talk to.",
    author: "Elvino",
  },
  {
    text: "I had a great experience with Monir. He took the time to understand exactly what I wanted and delivered a clean, professional haircut. His attention to detail, skill, and friendly attitude made the whole experience enjoyable. The shop was welcoming, and I left feeling confident with my haircut. I highly recommend Monir to anyone looking for a talented barber. I'll definitely be coming back! 💯✂️",
    author: "Emmanuel",
  },
  {
    text: "Massive shout out to Ehsan I had been regeowing my sides since I went with the goatee which looked much shorter than the middle. And I had burned the bottom 2 or 3 inches in the middle and he was able to rescue quite alot of the middle still and bring it back to one blended beard. Highly recommend him for any long beard brothers out there.",
    author: "Mitchell",
  },
  {
    text: "Excellent experience at House of Handsome Barbershop. The quality of the haircut was outstanding — very clean, detailed, and exactly what I asked for. Ehsan did an amazing job and showed great attention to detail throughout the entire appointment. He was professional, skilled, friendly, and made the experience very comfortable. Beyond the haircut itself, the customer service was exceptional. The atmosphere was welcoming, and you can tell they genuinely care about their clients and take pride in their work. Highly recommend Ehsan and this barbershop to anyone looking for both great results and a great experience.",
    author: "Sadegh",
  },
  {
    text: "I arrived around 1 PM at House of Handsome Barbershop. I had heard great things about Ehsan, so I decided to wait for him to do my haircut. Even though the other barbers were really good, Ehsan’s work was exceptional! The haircut he gave me was clean, stylish, and perfectly done. Definitely recommend this place!",
    author: "Peter",
  },
];

export const FAQS = [
  {
    id: "faq-1",
    question: "Do I need an appointment, or can I walk in?",
    answer: "Walk-ins are welcome, but booking ahead guarantees your preferred barber and time slot.",
  },
  {
    id: "faq-2",
    question: "How do I book a service?",
    answer: `Book online through our app or website, or call the shop at ${PHONE}.`,
  },
  {
    id: "faq-3",
    question: "What grooming products do you use?",
    answer: "We use premium, barber-grade products selected for a strong hold and healthy skin and hair.",
  },
  {
    id: "faq-4",
    question: "What services does Cameron Heights offer?",
    answer: "Haircuts, beard trims, hot towel shaves, hair colour, facial spa treatments, and kids' cuts.",
  },
];

export const OPENING_HOURS = [
  { day: "Monday – Friday", time: "9:00 am – 8:00 pm" },
  { day: "Saturday", time: "9:00 am – 7:00 pm" },
  { day: "Sunday", time: "10:00 am – 6:00 pm" },
];

// Same hours as OPENING_HOURS, in schema.org format for the LocalBusiness JSON-LD.
export const SCHEMA_OPENING_HOURS = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "20:00",
  },
  { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "19:00" },
  { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "18:00" },
];
