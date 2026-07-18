import { db } from "./db.js";
import { sampleTours } from "./toursData.js";

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
