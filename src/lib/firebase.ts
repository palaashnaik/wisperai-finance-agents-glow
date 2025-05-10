import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE2ZpnOiefhrTH4qeOfBN_9eUBVRADRoY",
  authDomain: "wisperai-mvp.firebaseapp.com",
  projectId: "wisperai-mvp",
  storageBucket: "wisperai-mvp.firebasestorage.app",
  messagingSenderId: "715355316189",
  appId: "1:715355316189:web:8063d7e7b6efd9f0952034",
  measurementId: "G-X3HSCKGBWT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Function to save email to Firebase
export async function saveEmailToFirebase(email: string, source: string = 'contact_form') {
  try {
    const docRef = await addDoc(collection(db, "leads"), {
      email,
      source,
      timestamp: serverTimestamp()
    });
    console.log("Email saved to Firebase with ID:", docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error saving email to Firebase:", error);
    return { success: false, error };
  }
}

export { app, analytics, db };
