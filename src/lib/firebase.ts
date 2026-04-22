import { type FirebaseApp, getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getAuth, type Auth } from "firebase/auth";
import { type Analytics, getAnalytics, isSupported } from "firebase/analytics";

const measurementId = import.meta.env.VITE_FIREBASE_MEASUREMENT_ID;

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  ...(measurementId ? { measurementId } : {}),
};

function assertFirebaseEnv(): void {
  const required = [
    ["VITE_FIREBASE_API_KEY", firebaseConfig.apiKey],
    ["VITE_FIREBASE_AUTH_DOMAIN", firebaseConfig.authDomain],
    ["VITE_FIREBASE_PROJECT_ID", firebaseConfig.projectId],
    ["VITE_FIREBASE_STORAGE_BUCKET", firebaseConfig.storageBucket],
    ["VITE_FIREBASE_MESSAGING_SENDER_ID", firebaseConfig.messagingSenderId],
    ["VITE_FIREBASE_APP_ID", firebaseConfig.appId],
  ] as const;
  const missing = required.filter(([, v]) => !v).map(([k]) => k);
  if (missing.length) {
    throw new Error(
      `Missing Firebase env: ${missing.join(", ")}. Copy .env.example to .env.local and fill values.`,
    );
  }
}

function createOrGetApp(): FirebaseApp {
  assertFirebaseEnv();
  if (getApps().length) return getApp();
  return initializeApp(firebaseConfig);
}

export const firebaseApp = createOrGetApp();

export const db: Firestore = getFirestore(firebaseApp);

export const auth: Auth = getAuth(firebaseApp);

let analyticsInstance: Analytics | null | undefined;

/**
 * Call once from the client entry (e.g. main.tsx). Resolves to null when Analytics is not supported (SSR, blocked cookies, etc.).
 */
export async function initFirebaseAnalytics(): Promise<Analytics | null> {
  if (analyticsInstance !== undefined) return analyticsInstance;
  if (typeof window === "undefined") {
    analyticsInstance = null;
    return null;
  }
  if (!(await isSupported())) {
    analyticsInstance = null;
    return null;
  }
  analyticsInstance = getAnalytics(firebaseApp);
  return analyticsInstance;
}
