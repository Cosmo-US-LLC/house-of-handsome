import beforeTexturedCrop from "@/assets/images/whyteAvenueProofs/before_textured_crop_fade.webp"
import afterTexturedCrop from "@/assets/images/whyteAvenueProofs/after_textured_crop_fade.webp"
import beforeCurtainFringe from "@/assets/images/whyteAvenueProofs/before_curtain_fringe.webp"
import afterCurtainFringe from "@/assets/images/whyteAvenueProofs/after_curtain_fringe.webp"
import beforeWarriorCut from "@/assets/images/whyteAvenueProofs/before_warrior_cut_skin_fade.webp"
import afterWarriorCut from "@/assets/images/whyteAvenueProofs/after_warrior_cut_skin_fade.webp"



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
    body: "Tap your package and confirm what's included. Offer pricing won't show online, it's applied when you visit us in shop.",
  },
  {
    num: "Step 03",
    icon: "calendar",
    title: "Book Appointment",
    body: "Choose your offer and book your appointment.",
  },
];

export const HOW_IT_WORKS_NOTE =
  "Offers are applied in shop, not at online checkout. Only one offer can be used per visit.";

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
    bookingUrl: "http://phore.st/MDvuc",
  },
  {
    id: "buzz-skin-fade",
    tag: "From $25",
    title: "Buzz & Skin Fade",
    desc: "A clean, precise fade for the client who knows exactly what they want and does not want to wait for it.",
    now: "$31.99",
    priceLabel: "Buzz Fade Haircut",
    benefits: [
      "Razor sharp blend line",
      "No appointment padding, in and out",
      "Elite barber, every chair",
    ],
    serviceParam: "Buzz & Skin Fade",
    bookingUrl: "http://phore.st/9jDMY",
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

// TODO: `before` currently reuses the `after` shot as a placeholder. Swap in
// the real before-cut photo for each transformation once available.
export const TRANSFORMATIONS = [
  {
    title: "Textured Crop + Fade",
    body: "Shaggy grow out to a tight, styled crop in one sitting.",
    before: beforeTexturedCrop,
    after: afterTexturedCrop,
  },
  {
    title: "Curtain Fringe",
    body: "The premium standard for modern gentlemen, done right.",
    before: beforeCurtainFringe,
    after: afterCurtainFringe,
  },
  {
    title: "Warrior Cut + Skin Fade",
    body: "Our award winning barbers' current signature build.",
    before: beforeWarriorCut,
    after: afterWarriorCut,
  },
];

