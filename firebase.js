import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC4j69Xr2EfPCJB_9lIvdd7p6QEyAnB9hY",
    authDomain: "docs-clone-42b2b.firebaseapp.com",
    projectId: "docs-clone-42b2b",
    storageBucket: "docs-clone-42b2b.appspot.com",
    messagingSenderId: "225131250633",
    appId: "1:225131250633:web:d2ca5e0ed246d5a5089e18"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();

  export { db };