import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0nzMEJqrT80vS3i8Wwws76pJEBq6OsgU",
  authDomain: "my-recipe-petpj.firebaseapp.com",
  projectId: "my-recipe-petpj",
  storageBucket: "my-recipe-petpj.appspot.com",
  messagingSenderId: "660483797302",
  appId: "1:660483797302:web:0323e18bd8c7aecd410397",
  measurementId: "G-6TEMLJ339R"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
