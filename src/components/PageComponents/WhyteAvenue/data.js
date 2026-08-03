import curtainFringeImage from "@/assets/images/home/gallery/gallery_m6.webp";

export const NAV_LINKS = [
  { label: "Offers", href: "#offers" },
  { label: "How It Works", href: "#how" },
];

export const HOW_IT_WORKS_STEPS = [
  {
    num: "Step 01",
    icon: "tag",
    title: "See the Offer",
    body: "Browse the current Whyte Avenue packages and pick the one that fits your look.",
  },
  {
    num: "Step 02",
    icon: "scissors",
    title: "Choose the Service",
    body: "Tap your package and confirm exactly what is included before you commit.",
  },
  {
    num: "Step 03",
    icon: "calendar",
    title: "Book Appointment",
    body: "Pick your barber and time slot and secure your chair, instantly.",
  },
];

export const OFFERS = [
  {
    id: "gentleman-package",
    tag: "VIP: Best Value",
    featured: true,
    title: "The Gentleman Package",
    desc: "Fresh cut, hair wash, 60 minute cleansing facial, and a premium hair or beard product to take home.",
    now: "$155",
    was: "$199",
    benefits: [
      "Full grooming reset, top to jaw",
      "60 minute cleansing facial included",
      "Premium product to take home",
    ],
    serviceParam: "The Gentleman Package",
  },
  {
    id: "buzz-skin-fade",
    tag: "From $25",
    title: "Buzz & Skin Fade",
    desc: "A clean, precise fade for the client who knows exactly what they want and does not want to wait for it.",
    now: "$25",
    priceLabel: "Buzz Fade Haircut",
    benefits: [
      "Razor sharp blend line",
      "No appointment padding, in and out",
      "Elite barber, every chair",
    ],
    serviceParam: "Buzz & Skin Fade",
  },
  {
    id: "groomsmen-package",
    tag: "Group Deal",
    title: "Groomsmen Package",
    desc: "Book 3 or more groomsmen together and haircuts drop 20%, every other service drops 10%.",
    now: "20% Off",
    benefits: [
      "Haircuts at 20% off, per groomsman",
      "Any other service at 10% off",
      "One shared appointment block",
    ],
    serviceParam: "Groomsmen Package",
  },
  {
    id: "cut-style-facial",
    tag: "$150 Value",
    title: "Men's Cut, Style & Facial",
    desc: "Cut and style, 30 minute hot steam facial, black mask treatment, and a 10 minute scalp massage.",
    now: "20% Off",
    benefits: [
      "30 minute facial, hot steam and scrub",
      "Black mask facial treatment",
      "10 minute scalp massage",
    ],
    serviceParam: "Men's Cut, Style & Facial",
  },
];

export const WHY_US_ITEMS = [
  {
    icon: "award",
    title: "Experienced Barbers",
    body: "Award recognized chairs with years of fades, crops, and beard work behind every blade.",
  },
  {
    icon: "sparkles",
    title: "Premium Products",
    body: "Studio grade clays, oils, and post shave balms. The same lines used in the chair go home with you.",
  },
  {
    icon: "wand",
    title: "Modern Techniques",
    body: "Warrior cuts, curtain fringe, textured crops. We run the styles that are actually trending this year.",
  },
  {
    icon: "sofa",
    title: "Clean, Comfortable Space",
    body: "A shop built for Whyte Ave: sharp interiors, no rush, a seat you will actually want to sit in.",
  },
  {
    icon: "userCheck",
    title: "Personalized Styling Advice",
    body: "Every cut opens with a real consultation: face shape, hair type, and how you actually wear it day to day.",
  },
];

export const TRANSFORMATIONS = [
  {
    title: "Textured Crop + Fade",
    body: "Shaggy grow out to a tight, styled crop in one sitting.",
    image: "/blog-images/9651-layered-waves.jpg",
  },
  {
    title: "Curtain Fringe",
    body: "The premium standard for modern gentlemen, done right.",
    image: curtainFringeImage,
  },
  {
    title: "Warrior Cut + Skin Fade",
    body: "Our award winning barbers' current signature build.",
    image: "/blog-images/9276-House-of-Handsome-Blog-Images-25.png",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Booked the Gentleman Package on a whim before a work trip and walked out looking like a different guy. Worth every dollar.",
    name: "J. Okafor",
    role: "Whyte Ave regular",
  },
  {
    quote:
      "Took my three groomsmen in together before the wedding. Fast, sharp, and the group discount made it an easy yes.",
    name: "R. Sandhu",
    role: "Groomsmen booking",
  },
  {
    quote:
      "My go to for the skin fade. Never had a barber this consistent, same clean line every single visit.",
    name: "M. Tran",
    role: "Whyte Ave regular",
  },
];
