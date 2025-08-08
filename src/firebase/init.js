// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9Ohse_QBNeYERQ51vgyEctMzUrMzsdns",
  authDomain: "mengxihe-project.firebaseapp.com",
  projectId: "mengxihe-project",
  storageBucket: "mengxihe-project.firebasestorage.app",
  messagingSenderId: "788290164366",
  appId: "1:788290164366:web:cec0d63ac9dfff91061bdf"
};

// // Initialize Firebase
// initializeApp(firebaseConfig);
// const db = getFirestore(app)
// export default db
// ✅ 修正点：把 initializeApp 返回值赋给 app
const app = initializeApp(firebaseConfig);

// ✅ 传入 app 获取 Firestore 实例
const db = getFirestore(app);

export default db;