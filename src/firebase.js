import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjLdqv_VQoRhayd6tMSVPJTi18tORV4rs",
  authDomain: "bubble-tea-shop-38dd7.firebaseapp.com",
  projectId: "bubble-tea-shop-38dd7",
  storageBucket: "bubble-tea-shop-38dd7.appspot.com",
  messagingSenderId: "450479428010",
  appId: "1:450479428010:web:eadfc2b9181055813e9bd3",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
