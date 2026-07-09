import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, deleteUser } from "firebase/auth";
import { getFirebaseApp } from "./lib/firebase";
import {
  seedCareersToFirestore,
  seedTeamToFirestore,
  seedVideosToFirestore,
  seedCaseStudiesToFirestore,
  seedKnowledgeBaseToFirestore,
  seedSiteSettingsToFirestore,
  seedBlogPostsToFirestore,
  seedGalleryToFirestore,
  seedProductsToFirestore,
  seedStatsToFirestore,
} from "./lib/seedCms";

async function run() {
  console.log("Starting database seed with auth...");
  
  const app = getFirebaseApp();
  if (!app) {
    console.error("Firebase could not be initialized. Check your environment variables.");
    process.exit(1);
  }

  const auth = getAuth(app);
  if (!auth) {
    console.error("Firebase Auth is not initialized.");
    process.exit(1);
  }

  const email = "temp_seeder_admin@shivaagriclinic.com";
  const password = "TemporaryPassword123!_Seeder";
  let userCredential;

  try {
    console.log("Attempting to create a temporary admin user...");
    userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("Created temporary user successfully.");
  } catch (err: any) {
    if (err.code === "auth/email-already-in-use") {
      console.log("User already exists, signing in...");
      userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Signed in successfully.");
    } else {
      console.error("Failed to authenticate (signup/signin disabled or failed):", err.message);
      console.log("\n[ACTION REQUIRED] Please temporarily enable Email/Password Authentication in your Firebase Console, or manually add a user with:");
      console.log(`Email: ${email}`);
      console.log(`Password: ${password}`);
      console.log("Then run the seed script again.");
      process.exit(1);
    }
  }

  try {
    console.log("Seeding collections...");
    await seedSiteSettingsToFirestore();
    console.log("Seeded Site Settings.");
    await seedBlogPostsToFirestore();
    console.log("Seeded Blog Posts.");
    await seedGalleryToFirestore();
    console.log("Seeded Gallery.");
    await seedProductsToFirestore();
    console.log("Seeded Products.");
    await seedCareersToFirestore();
    console.log("Seeded Careers.");
    await seedTeamToFirestore();
    console.log("Seeded Team Members.");
    await seedVideosToFirestore();
    console.log("Seeded Videos.");
    await seedCaseStudiesToFirestore();
    console.log("Seeded Case Studies.");
    await seedKnowledgeBaseToFirestore();
    console.log("Seeded Knowledge Base Articles.");
    await seedStatsToFirestore();
    console.log("Seeded Statistics.");
    console.log("Database seed completed successfully!");

    // Optionally delete the temporary user to leave the auth clean
    if (userCredential.user) {
      console.log("Cleaning up temporary user...");
      await deleteUser(userCredential.user);
      console.log("Temporary user deleted successfully.");
    }

    process.exit(0);
  } catch (err: any) {
    console.error("Seeding failed during write operations:", err);
    process.exit(1);
  }
}

run();
