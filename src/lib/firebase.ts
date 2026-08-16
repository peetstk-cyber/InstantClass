import { initializeApp, getApps, getApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
  inMemoryPersistence,
  type User as FirebaseUser
} from "firebase/auth";
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  onSnapshot 
} from "firebase/firestore";
import type { UserProfile } from "../types/auth";

// Firebase Configuration from .env or project keys
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAHGB5JbKfl4gwXnZX9HPJvHyQNxlCuqTY",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "instantclass-ec875.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "instantclass-ec875",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "instantclass-ec875.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "745086268280",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:745086268280:web:b86f266fbcf131701a0e8d",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-Y9ZWE1SFKY",
};

// Initialize Firebase App singleton
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const db = getFirestore(app);

/**
 * Safe Google Sign In with Popup handling IndexedDB persistence glitches
 */
export async function loginWithGooglePopup() {
  try {
    await setPersistence(auth, browserLocalPersistence);
  } catch (err) {
    console.warn("Fallback to inMemoryPersistence:", err);
    try {
      await setPersistence(auth, inMemoryPersistence);
    } catch (err2) {
      console.warn("Failed setting inMemoryPersistence:", err2);
    }
  }
  return signInWithPopup(auth, googleProvider);
}

/** 
 * Check if real Firebase Config is active
 */
export const isRealFirebaseConfigured = true;

/**
 * Sync Firebase Auth User with Cloud Firestore User Document
 */
export async function syncUserProfile(fbUser: FirebaseUser, extraData?: { name?: string; username?: string }): Promise<UserProfile> {
  const userRef = doc(db, "users", fbUser.uid);
  const snap = await getDoc(userRef);

  if (snap.exists()) {
    return snap.data() as UserProfile;
  }

  const generatedUsername = extraData?.username || (fbUser.email ? fbUser.email.split("@")[0].toLowerCase().replace(/[^a-z0-9_]/g, "") : `user_${fbUser.uid.slice(0, 6)}`);

  // Create new profile document in Firestore
  const newProfile: UserProfile = {
    id: fbUser.uid,
    username: generatedUsername,
    name: extraData?.name || fbUser.displayName || fbUser.email?.split("@")[0] || "Dr. Resident",
    email: fbUser.email || "",
    avatarUrl: fbUser.photoURL || "",
    streakDays: 1,
    quizzesAnswered: 0,
    quizzesCorrect: 0,
    bookmarks: [],
    notes: {},
  };

  await setDoc(userRef, newProfile);
  return newProfile;
}

/**
 * Save custom clinical notes to Firestore for current user
 */
export async function saveNoteToFirestore(uid: string, systemName: string, noteText: string): Promise<void> {
  if (!uid) return;
  const userRef = doc(db, "users", uid);
  await updateDoc(userRef, {
    [`notes.${systemName}`]: noteText
  });
}

/**
 * Update user bookmarks in Firestore
 */
export async function updateBookmarksInFirestore(uid: string, bookmarks: string[]): Promise<void> {
  if (!uid) return;
  const userRef = doc(db, "users", uid);
  await updateDoc(userRef, { bookmarks });
}

export { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged,
  doc,
  setDoc,
  getDoc,
  onSnapshot
};
