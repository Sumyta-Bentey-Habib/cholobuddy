// ─── Types ────────────────────────────────────────────────────────────────────

export interface Tour {
  id: string;
  title: string;
  price: string;
  duration: string;
  description: string;
  rating?: string;
  reviews?: string;
  location?: string;
  distanceNote?: string;
  imgUrl?: string;
  popular?: boolean;
  href?: string;
}

export interface Hotel {
  id: string;
  name: string;
  price: string;
  location: string;
  rating: string;
  category: string;
  distanceNote: string;
  imgUrl: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imgUrl: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqCategory {
  label: string;
  items: FaqItem[];
}

export interface Transaction {
  id: string;
  customer: string;
  package: string;
  date: string;
  amount: number;
  status: "Completed" | "Pending" | "Refunded";
}

export interface SavedTrip {
  id: string;
  title: string;
  price: string;
  imgUrl: string;
  location: string;
}

export interface Stat {
  id: string;
  icon: string;
  value: string;
  label: string;
}

export interface HeroThumbnail {
  alt: string;
  src: string;
  label: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface RecentSearch {
  id: string;
  destination: string;
  guests: number;
  type: string;
  dates: string;
}

// ─── Navigation ────────────────────────────────────────────────────────────────

export const navLinks: NavLink[] = [
  { name: "Explore", href: "/" },
  { name: "About", href: "/about" },
  { name: "Trips", href: "/trips" },
  { name: "Contact", href: "/contact" },
];

// ─── Hero Thumbnails ───────────────────────────────────────────────────────────

export const heroThumbnails: HeroThumbnail[] = [
  {
    alt: "Sundarbans Mangrove Forest",
    label: "Sundarbans",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhqcQMATy9zWe5tsasHl7qvvq9CVen7MVbw11wZ_dR7uG1h3egYBWg-8gXNkvP9y5X0SmFlSKA8LN4xp5xrmMt3ld6e6XdeMxXaWXFvl6Sb6B0uvmSAqOC2ydxXfjWQyTUqet41PDwRS3fU18idH1U2Z32snc0NIrLORkQN9BpeUR840PDXGdSBn35vNwOUgoe-7pLZNF69HlRPn8dgzxO_pU_LGFATkBM7m_ZRFm948fK0zCUBq3zVvWEkxSsV1JC_o8dLKNXT14",
  },
  {
    alt: "Cox's Bazar Coastal Sunrise",
    label: "Cox's Bazar",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIBltUU-qIZOdZHombOqICpY0VMdZCQTSAAWLkmqQpxxV6_9YUPfsbtAqQhW19lKdP2FGWS4wwjIXpsWQ_TDMq4PcomWSleiWcAaJ0A466yz2haDNTjXxLDe_mQ_ktYEvyKq72eBOJ5wrAp8Hx3TnYudghaTNR-6phx6AwtQQUcbzYIEuhwTe4tgvwnGKrVuejCX3KcxYYS-SI5sgBO0wrN2vAsypo6xkS2PafTWIN3vAZxKIlgiqGzcDqAXlkI2PRanWyIBoxjXE",
  },
  {
    alt: "Sylhet Rolling Tea Gardens",
    label: "Sylhet",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8PpCNtdSUokJs2YPM4bYJjkTrEHCEd7oobg1sf0xe743j6c1evnmr6gGBa7BMYIQLakRWPDBj_3-hfRwVEKx6P_kcHC3ivVr52No3x6zu-551us7uZGKphlD4X0MXFu20V4XD2YZqOyIs451zH9qoDvjiSMy4iG_Kme8cyxr4Z5QoE9pMo1dB49xkDxdG1zTzTac2Q22_HepNnv8mSinDESOlIVYIuXZK3sDEJKmAY_eP69aIQA0peXS9tMLt3i5FQ6zk5FWVCO8",
  },
];

// ─── Tours ────────────────────────────────────────────────────────────────────

export const toursData: Tour[] = [];


// ─── Hotels ───────────────────────────────────────────────────────────────────

export const hotelsData: Hotel[] = [
  {
    id: "sayeman",
    name: "Sayeman Beach Resort",
    price: "9,000",
    location: "Cox's Bazar",
    rating: "9.4",
    category: "5-Star Beachfront",
    distanceNote: "0.2 km from beach",
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD0Id7rx36ozUOtdbElkYd4LuiIYKEbMGXAyfMabaXgpu0Q0A-PHyyJMHeKoPSD182bHAbIMHYUe_78yfXIlU-0bkk80YD7IGrC-m4yutpJYn1Z-qcKWvfPblS24YfQx3hvtItoe-0XTWDoQv41qadTs9gx2oydROEQ3MvuTeos5k7hiDtonSiutAgPMJs7cytLe_aWi_bG9zJH_ydCRQJvRhKHLlHw6_ZPYmvPPlVwP4xKagcB-bdxfN6LcCOXY0SHkR2rTmXiNE0",
  },
  {
    id: "grand-sultan",
    name: "Grand Sultan Tea Resort",
    price: "12,000",
    location: "Sylhet",
    rating: "9.1",
    category: "5-Star Heritage",
    distanceNote: "1.5 km from reserve",
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCxn0tQtciBGoyKegZrtHbyztChZMNK0cxHRWR1TS8oSkpnjxDcLyXzBWmOUsx5eY0liBwdpqs5MlCbMYxneAYTXJ7u7xtZ3qZXHDYDn7OUkHnvm6x_Vt4bdi-a1AfvkWV6b5eH6qObu33A-WCg4hAIY_BzzoOD4UXxlu677f3uTTKIy92K0vPS4zd9TA3gsuXFPS8AoklQluBNAzvj9UsJk_QUkyXYMHnrJktueMHD8RgmMU41XDjqMEecsrrBeKuBXirIAZh1QlU",
  },
  {
    id: "westin-dhaka",
    name: "The Westin Dhaka",
    price: "18,000",
    location: "Gulshan, Dhaka",
    rating: "8.8",
    category: "Business Luxury",
    distanceNote: "0.8 km from center",
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClxQyU3wlpk6UnpGDf3XqLlf4uLElWSU-lPuFjdDI56745Q6VYD2kHAc5vPhoO6KLzlDarEWJ4cyW7zxIRWYr2ZyHrt1Q2iKfbqGrULK554Aw8jc6PCuKxf6j1zlSeTpN4GQBmbi-OVJVHzMFapTZ5gkfAf9eo_TArxzj6xy8Y1bbXRa2L5SISH1toBUUj3Uyl4faeM-Dm-dBjjtyhtgio2ulQizWmD_avUSniI_9Ar4gdIUFI9x4RTTiKeLPgjLfNPIdxe8lSzDE",
  },
  {
    id: "dusai",
    name: "DuSai Resort & Spa",
    price: "11,000",
    location: "Moulvibazar, Sylhet",
    rating: "8.7",
    category: "Boutique Eco",
    distanceNote: "0.5 km from hilltop",
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBBEQ-ROvKhkmnkF_B5gZVV-jmcvJVS5_Lc3_EcPTSe6Vw14lpWimyEyK7OXOk1aDT__-aBKFgICYMRqlES1QtU2OSc0zP0mBS9ZvO_vUTKVChRkf_QoEkJWqzaY5_Ue-aBrtKoYwCr4b8Fw0jCfjL5HEqZ9RICgbyixeTvmlduGM6VhexecsUyxcNN3cU70irEBgpU5Euz5_ecvyAjUraXZuX_sjiYachMw9EACQIm_dknA9dGPlaqUm3iHN1oc45mFYNIcbe99Tc",
  },
];

// ─── Team Members ─────────────────────────────────────────────────────────────

export const teamData: TeamMember[] = [
  {
    id: "amira",
    name: "Amira Khan",
    role: "Founder & Visionary",
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDP4ZfbxgME8nSotwIK_9kQ2aQSOHIv-iXDjyTosTUEVEfXCsMgO2yHFbcM0_6BYNquOMqWFfhxVBJKT3xrJSs6VXAyOsqpwzw5ZkGHUrhjWoTbBq4DOTMdZcW2keo36y5HYb2ru7OvhzYOnOUJT1pVM7k74ndvucU_TILtd3jElw2ZenJazWnUA-wuNw0O-TtijP2DRKmLJOtp3bw17plv0aGLY2CpNv-eQGq0x9IpPkYSOz8QLy5Qd9NRZkXVjEE8qzOKkvgpkMs",
  },
  {
    id: "tariq",
    name: "Tariq Rahman",
    role: "Director of Experiences",
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAVv9hdrcoerhKUWAw1fuxRVUgRXDqGyi830PgERZ18veNLvDCns2Jyr09E0egbsK7cbPS4mjXAHZ6elpTyaA5BGceNZNdyw7AOBSF-IbuhvjnQcy5tOR0UfSwTOzxGqVFGwu6Gy1fP0eO5MsBghPQNsJBQdvOWt0FT1CChkliHxh96i5WeoGHdlSTBvUMR_NF8GQXSyUGGwFJSkQ51529vjtSnKc0KjoWzGIX5eS0QpZGP_pPYoICsvmQVGOtwE1N1sn64zf_pOtA",
  },
  {
    id: "nadia",
    name: "Nadia Ali",
    role: "Head of Curation",
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC66nDO0-9JEIkMcnX-k8GfZ9xjdFY4NLFSzhizwl3OV1XkxtRGvv31fkK4zjtE-IyQiyOJ9Yx7pe54Ns9L9_AJBMYR5BZaiI6PLdLyILSzdpxKl_-xd51HFvEa77jUE5XIecj4IvJKuH2EUlwj1N90SfjhKS4Nw0MRXjvxlyHVGb0scPVae30qFsCW3SCaxB8kGbf42khkbrQhiW_6JPIMg4RnxSNDZJ1fbBGvknTF7F0EZVvtuTAknZD_l6ZecYui7ElPDBkoyNc",
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const testimonialsData: Testimonial[] = [
  {
    id: "sarah-j",
    quote:
      "An incredibly seamless experience. The attention to detail in our Sylhet itinerary was unmatched. Pure quiet luxury from start to finish.",
    author: "Sarah Jenkins",
    location: "London, UK",
    rating: 5,
  },
  {
    id: "david-emma",
    quote:
      "CholoBuddy showed us a side of Bangladesh we never knew existed. The private boat tour in the Sundarbans was magical and deeply serene.",
    author: "David & Emma Clarke",
    location: "Melbourne, Australia",
    rating: 5,
  },
  {
    id: "r-thorne",
    quote:
      "Every accommodation felt like a sanctuary. The editorial aesthetic brought to life in every detail — this is how luxury travel should feel.",
    author: "R. Thorne",
    location: "New York, USA",
    rating: 5,
  },
];

// ─── Stats ────────────────────────────────────────────────────────────────────

export const statsData: Stat[] = [
  {
    id: "bookings",
    icon: "confirmation_number",
    value: "10,000+",
    label: "Verified Bookings",
  },
  {
    id: "partners",
    icon: "handshake",
    value: "500+",
    label: "Verified Partners",
  },
  {
    id: "destinations",
    icon: "travel_explore",
    value: "250+",
    label: "Destinations",
  },
  {
    id: "satisfaction",
    icon: "sentiment_very_satisfied",
    value: "98%",
    label: "Happy Explorers",
  },
];

// ─── FAQs ─────────────────────────────────────────────────────────────────────

export const faqsData: Record<string, FaqCategory> = {
  cancellations: {
    label: "Cancellations",
    items: [
      {
        id: "cancel-tour",
        question: "Can I cancel my Sundarbans or Sajek tour?",
        answer:
          "Tours can be cancelled up to 7 days before departure for a full refund. Cancellations inside 7 days are subject to a 50% fee.",
      },
      {
        id: "cancel-hotel",
        question: "How do I cancel a hotel booking?",
        answer:
          "Navigate to your Traveler Dashboard, locate the reservation under 'My Bookings', and click 'Cancel Booking'.",
      },
    ],
  },
  refunds: {
    label: "Refunds",
    items: [
      {
        id: "refund-time",
        question: "How long does a refund take to process?",
        answer:
          "Refunds are processed back to your original payment method (bKash, Nagad, or Card) within 3–5 business days.",
      },
      {
        id: "cancel-fees",
        question: "Are there any cancellation fees?",
        answer:
          "Cancellations made within 7 days of departure incur a 50% fee. Cancellations within 48 hours are non-refundable.",
      },
    ],
  },
  payments: {
    label: "Payments",
    items: [
      {
        id: "payment-methods",
        question: "Which payment methods are accepted?",
        answer:
          "We accept bKash, Nagad, Visa, Mastercard, and American Express.",
      },
      {
        id: "emi",
        question: "Is there an installment (EMI) option?",
        answer:
          "For tours exceeding BDT 20,000, interest-free EMI options are available for up to 6 months with selected banks.",
      },
    ],
  },
};

// ─── Transactions ─────────────────────────────────────────────────────────────

export const transactionsData: Transaction[] = [
  {
    id: "CB-2026-9042",
    customer: "Marcus Chen",
    package: "Sylhet Tea Garden Odyssey",
    date: "May 14, 2026",
    amount: 16400,
    status: "Completed",
  },
  {
    id: "CB-2026-9043",
    customer: "Zarina Rahman",
    package: "Sundarbans Royal Tiger Safari",
    date: "May 15, 2026",
    amount: 26000,
    status: "Completed",
  },
  {
    id: "CB-2026-9044",
    customer: "Fahim Anwari",
    package: "Cox's Bazar Coastal Escape",
    date: "May 17, 2026",
    amount: 15000,
    status: "Pending",
  },
  {
    id: "CB-2026-9045",
    customer: "Sarah Thompson",
    package: "Sundarbans Royal Tiger Safari",
    date: "May 18, 2026",
    amount: 13000,
    status: "Completed",
  },
  {
    id: "CB-2026-9046",
    customer: "Aminul Islam",
    package: "Sylhet Tea Garden Odyssey",
    date: "May 19, 2026",
    amount: 8200,
    status: "Refunded",
  },
];

// ─── Saved Trips ──────────────────────────────────────────────────────────────

export const savedTripsData: SavedTrip[] = [
  {
    id: "sylhet",
    title: "Sylhet Tea Garden Odyssey",
    price: "8,200",
    location: "Sylhet Division",
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCocIWxyMeW0YZ35I6KZskUjE6kPb3qgLg6ZS_fNoz40OxZRnJFtnKsHyn93GkHGMgXJ4ZJ4EQA5agUysxxJDnUZ2UylHqhzw34IDKipiQP7464KQJV4rbO2KWjwADiXSKLUJ0_keaDWTAZn0gCgJvRflUlR47pr24RwH-kkWmIqlTL6L8w6lphXNNvlAf582TkF5hSzf0XBhxc2jSH02HbmlEdDseZAQsEj456-b1B-OT_B8GIW2OE6Cl6412WggjKC774KkqsBHc",
  },
  {
    id: "coxs-bazar",
    title: "Cox's Bazar Coastal Escape",
    price: "15,000",
    location: "Cox's Bazar, Chittagong",
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCTng-Dp_AENjc_fhw3mx-fiss9bYNKD2Fht4as4R6K7uQFBdaj_HmXV51z0oDZueY6y3k3sY8I_5fMLIAR4pKQ-dRLWNO5hR56WZcDsZF-06P474EYmcER_QQUO46KvFebfF6_HX2XGhzQzfOmt_xcCyqZCjTYfkAOUma3LhLqsv-FlJxMT_DnR2rOeNN6CN_DiKc75-9N3IwtiCOqPzzqas4tqnx0RrYqNru0sDw5Ylv34nc6SpE2wrllwXvbUqT-_J-hPIibmXk",
  },
];

// ─── Recent Searches ──────────────────────────────────────────────────────────

export const recentSearchesData: RecentSearch[] = [
  {
    id: "rs-1",
    destination: "Cox's Bazar, Bangladesh",
    guests: 2,
    type: "Stays",
    dates: "Oct 24 – 28",
  },
  {
    id: "rs-2",
    destination: "Sylhet Tea Gardens",
    guests: 1,
    type: "Tours",
    dates: "Nov 08 – 12",
  },
];

// ─── Itinerary ─────────────────────────────────────────────────────────────────

export interface ItineraryActivity {
  name: string;
  icon: string;
}

export interface ItineraryDay {
  day: string;
  title: string;
  description: string;
  activities: ItineraryActivity[];
  imgUrl: string | null;
}

export const itineraryData: ItineraryDay[] = [
  {
    day: "Day 01",
    title: "Into the Deep Emerald",
    description:
      "Arrival at Khulna and immediate boarding of the M.V. Eco-Spirit. We navigate the Rupsha river towards the forest gateway as evening mist settles over the water.",
    activities: [
      { name: "Welcome feast with local organic produce", icon: "restaurant" },
      { name: "Sunset cruise through Harbaria channel", icon: "visibility" },
    ],
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC_uf03Ji-brjcYeNrDvd4nEfLZwoqK52jEhmt1rF7tm_74HCmzIHhbqQ7OBbAReL5lzlpsChWCEsz2nXtLOADpaPecpE8wKxFEZyWIErh-EFlurAj-yeJt6Sdg4bUhup2Juby9qJEgtGiP9sacLQDZIu5XEJa0OpMgMBSmzhTEOt2v-FaVL5E2KcqK3U5-1_S-f0w5LMtS5Ub39hJMKT-cIfZdUEQp9JAMKbF5abIN98E9OxgzRe8M5GiNIlqvlQzbMqInaOmObI4",
  },
  {
    day: "Day 02",
    title: "The Tiger's Realm",
    description:
      "Dawn trek through the Katka wildlife sanctuary. Silent observation from watchtowers and beach exploration at Jamtola — one of the most secluded beaches on earth.",
    activities: [
      { name: "6:00 AM Jungle Walk with Expert Naturalist", icon: "directions_walk" },
      { name: "Relaxation at Jamtola secluded beach", icon: "waves" },
    ],
    imgUrl: null,
  },
  {
    day: "Day 03",
    title: "Rhythm of the Tides",
    description:
      "Karamjal crocodile breeding center visit and reflection session before returning to the mainland. A farewell breakfast on the deck as the Sundarbans recedes into the horizon.",
    activities: [],
    imgUrl: null,
  },
];
