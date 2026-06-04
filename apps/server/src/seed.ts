import { db } from "./db.js";

const sampleTours = [
  {
    title: "Sajek Valley: Cloud Kingdom Adventure",
    titleBn: "সাজেক ভ্যালি: মেঘের রাজ্যে অ্যাডভেঞ্চার",
    price: 6500,
    duration: "3 Days, 2 Nights",
    durationBn: "৩ দিন, ২ রাত",
    description: "Experience the magical floating clouds, traditional indigenous cuisine, and scenic green mountains of Sajek Valley, Rangamati.",
    descriptionBn: "রাঙ্গামাটির সাজেক ভ্যালিতে যাদুকারী ভাসমান মেঘ, ঐতিহ্যবাহী আদিবাসী খাবার এবং সবুজ পাহাড়ের মনোরম দৃশ্য উপভোগ করুন।",
    location: "Sajek Valley, Rangamati",
    locationBn: "সাজেক ভ্যালি, রাঙ্গামাটি",
    distanceNote: "340 km from Dhaka",
    imgUrl: "/images/sajek.png",
    popular: true,
    startDate: "2026-06-15",
    endDate: "2026-06-18",
    rating: "9.6",
    reviews: "142",
    inclusions: [
      "2 Nights accommodation in a premium Eco-Resort",
      "All traditional local meals (Breakfast, Lunch, Dinner)",
      "Chander Gari (4x4 Jeep) for local sightseeing",
      "Experienced local tour guide support",
      "All entry tickets and community fees"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Sunset at Konglak Hill",
        titleBn: "আগমন ও কংলাক পাহাড়ে সূর্যাস্ত",
        description: "Arrive at Sajek, check into the resort. In the late afternoon, hike up to Konglak Hill, the highest point in Sajek, to experience a majestic sunset above the clouds.",
        descriptionBn: "সাজেকে পৌঁছানো ও রিসোর্টে চেক-ইন। শেষ বিকেলে কংলাক পাহাড়ে আরোহণ ও মেঘের ওপরে অপরূপ সূর্যাস্ত উপভোগ।"
      },
      {
        day: 2,
        title: "Sunrise at Helipad & Tour to Alutila Cave",
        titleBn: "হেলিপ্যাডে সূর্যোদয় এবং আলুটিলা গুহা ভ্রমণ",
        description: "Wake up early to catch the breathtaking sunrise from the helipad. After breakfast, head to Khagrachari to explore the Alutila Mysterious Cave and Risang Waterfall.",
        descriptionBn: "হেলিপ্যাড থেকে মনোরম সূর্যোদয় দেখতে ভোরে ঘুম থেকে ওঠা। সকালের নাস্তার পর খাগড়াছড়ির আলুটিলা রহস্যময় গুহা এবং রিসাং ঝর্ণা ভ্রমণ।"
      },
      {
        day: 3,
        title: "Morning Clouds and Return to Dhaka",
        titleBn: "সকালের মেঘ এবং ঢাকায় প্রত্যাবর্তন",
        description: "Enjoy your morning coffee surrounded by floating white clouds. Check out from the resort and start your return journey back to Dhaka with unforgettable memories.",
        descriptionBn: "ভেসে যাওয়া সাদা মেঘের মাঝে সকালের কফি উপভোগ করুন। রিসোর্ট থেকে বিদায় নিয়ে মনোরম সব স্মৃতি নিয়ে ঢাকার উদ্দেশ্যে ফিরতি যাত্রা শুরু।"
      }
    ],
    reviewsBreakdown: {
      "Location": 9.8,
      "Cleanliness": 9.5,
      "Service": 9.7,
      "Value for Money": 9.4
    }
  },
  {
    title: "Cox's Bazar: Pristine Sandy Beaches",
    titleBn: "কক্সবাজার: অবিচ্ছিন্ন বালুকাময় সমুদ্র সৈকত",
    price: 5900,
    duration: "3 Days, 2 Nights",
    durationBn: "৩ দিন, ২ রাত",
    description: "Relax on the world's longest natural sandy beach. Take a walk along the marine drive, explore Himchari, and enjoy fresh seafood.",
    descriptionBn: "বিশ্বের দীর্ঘতম প্রাকৃতিক বালুকাময় সমুদ্র সৈকতে অবসর সময় কাটান। মেরিন ড্রাইভ ধরে ঘুরে বেড়ান, হিমছড়ি দেখুন এবং তাজা সি-ফুড উপভোগ করুন।",
    location: "Cox's Bazar",
    locationBn: "কক্সবাজার",
    distanceNote: "390 km from Dhaka",
    imgUrl: "/images/coxsbazar.png",
    popular: true,
    startDate: "2026-06-20",
    endDate: "2026-06-23",
    rating: "9.3",
    reviews: "210",
    inclusions: [
      "Premium Beachfront Hotel accommodation",
      "Daily complimentary Breakfast",
      "Marine Drive tour in open-hood Jeep",
      "Entry fees to Himchari National Park"
    ],
    itinerary: [
      {
        day: 1,
        title: "Beach Walk and Sunset",
        titleBn: "সৈকত ভ্রমণ ও সূর্যাস্ত",
        description: "Arrive in Cox's Bazar, check in. Spend the afternoon relaxing on the main beach and witnessing the sunset.",
        descriptionBn: "কক্সবাজারে আগমন ও চেক-ইন। বিকেলে মূল সৈকতে ঘুরে বেড়ানো ও সূর্যাস্ত অবলোকন।"
      },
      {
        day: 2,
        title: "Himchari & Inani Beach via Marine Drive",
        titleBn: "মেরিন ড্রাইভ দিয়ে হিমছড়ি ও ইনানী সৈকত",
        description: "Take an exciting ride on the Marine Drive to visit the Himchari Waterfall and the coral-rich Inani Beach.",
        descriptionBn: "মেরিন ড্রাইভ দিয়ে হিমছড়ি ঝর্ণা এবং কোরাল বেষ্টিত ইনানী সৈকতে রোমাঞ্চকর ভ্রমণ।"
      },
      {
        day: 3,
        title: "Souvenir Shopping & Departure",
        titleBn: "স্মারক কেনাকাটা ও প্রস্থান",
        description: "Visit the local Burmese Market for unique souvenirs before boarding your bus back to Dhaka.",
        descriptionBn: "ঢাকার উদ্দেশ্যে বাসে চড়ার আগে স্থানীয় বার্মিজ মার্কেটে স্মারক ও ঐতিহ্যবাহী পণ্য কেনাকাটা।"
      }
    ],
    reviewsBreakdown: {
      "Location": 9.6,
      "Cleanliness": 9.1,
      "Service": 9.3,
      "Value for Money": 9.2
    }
  },
  {
    title: "Sylhet: Tea Gardens & Swamp Forests",
    titleBn: "সিলেট: চা বাগান ও জলাবন অভিযান",
    price: 4800,
    duration: "2 Days, 1 Night",
    durationBn: "২ দিন, ১ রাত",
    description: "Explore the green carpet-like tea gardens of Sreemangal, boat through Ratargul Swamp Forest, and experience the crystal-clear waters of Jaflong.",
    descriptionBn: "শ্রীমঙ্গলের সবুজ গালিচার মতো চা বাগান ঘুরে দেখুন, রাতারগুল জলাবনে নৌকা ভ্রমণ করুন এবং জাফলংয়ের স্ফটিক স্বচ্ছ পানি উপভোগ করুন।",
    location: "Sylhet",
    locationBn: "সিলেট",
    distanceNote: "240 km from Dhaka",
    imgUrl: "/images/sylhet.png",
    popular: false,
    startDate: "2026-06-27",
    endDate: "2026-06-29",
    rating: "9.4",
    reviews: "89",
    inclusions: [
      "Hotel accommodation in Sylhet town",
      "Traditional Sylheti Lunch with Shatkora beef/fish",
      "Private boat hire at Ratargul Swamp Forest",
      "Local transport for sightseeing"
    ],
    itinerary: [
      {
        day: 1,
        title: "Ratargul Swamp Forest Boat Ride",
        titleBn: "রাতারগুল জলাবনে নৌকা ভ্রমণ",
        description: "Explore the only freshwater swamp forest in Bangladesh by a country boat. Watch the beautiful submerged trees.",
        descriptionBn: "দেশীয় নৌকায় করে বাংলাদেশের একমাত্র মিঠাপানির জলাবন ঘুরে দেখুন। পানিতে নিমজ্জিত সুন্দর গাছপালা অবলোকন।"
      },
      {
        day: 2,
        title: "Jaflong Crystal Clear Water & Tea Gardens",
        titleBn: "জাফলংয়ের স্বচ্ছ পানি ও চা বাগান",
        description: "Visit the scenic Jaflong bordering India, explore the tea estates, and witness the stone collection process.",
        descriptionBn: "ভারতের সীমান্তবর্তী মনোরম জাফলং ভ্রমণ, চা বাগান পরিদর্শন এবং পাথর সংগ্রহের অনন্য দৃশ্য উপভোগ।"
      }
    ],
    reviewsBreakdown: {
      "Location": 9.5,
      "Cleanliness": 9.2,
      "Service": 9.4,
      "Value for Money": 9.5
    }
  }
];

async function seed() {
  console.log("🌱 Firestore Seeding: Starting tours import...");
  const collectionRef = db.collection("tours");
  
  // Clean up existing tours first to avoid duplicates
  const snapshot = await collectionRef.get();
  const batch = db.batch();
  snapshot.docs.forEach((doc) => {
    batch.delete(doc.ref);
  });
  await batch.commit();
  console.log("🧹 Cleaned up existing tours in database.");

  // Insert new tours
  for (const tour of sampleTours) {
    const docRef = await collectionRef.add({
      ...tour,
      createdAt: new Date(),
    });
    console.log(`✅ Seeded tour: "${tour.title}" (ID: ${docRef.id})`);
  }
  console.log("🎉 Seeding completed successfully!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ Error seeding data:", err);
  process.exit(1);
});
