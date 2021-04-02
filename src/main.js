import { createApp } from 'vue';
import firebase from 'firebase/app';
import App from './App.vue';
import router from './router';
import store from './store/index';

const firebaseConfig = {
  apiKey: 'AIzaSyD8jZLkTgazL1TX71kQbCsv76OIsaKXS0c',
  authDomain: 'booky-auth.firebaseapp.com',
  projectId: 'booky-auth',
  storageBucket: 'booky-auth.appspot.com',
  messagingSenderId: '394753361255',
  appId: '1:394753361255:web:becad0150dd83ef38adbc2',
};

firebase.initializeApp(firebaseConfig);

const app = createApp(App);
app.use(router).mount('#app');
app.use(store);
