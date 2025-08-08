// import './assets/main.css'
// import '@/assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
// import DataTable from 'primevue/datatable'
// import Column from 'primevue/Column'

const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)
// app.component('DataTable', DataTable)
// app.component('Column', Column)

app.mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9Ohse_QBNeYERQ51vgyEctMzUrMzsdns",
  authDomain: "mengxihe-project.firebaseapp.com",
  projectId: "mengxihe-project",
  storageBucket: "mengxihe-project.firebasestorage.app",
  messagingSenderId: "788290164366",
  appId: "1:788290164366:web:cec0d63ac9dfff91061bdf"
};

// Initialize Firebase
initializeApp(firebaseConfig);
