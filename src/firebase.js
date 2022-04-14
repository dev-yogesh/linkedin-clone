import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCQXpju-Mi97FPODmP0xlHS_xRSo0a4tMU',
  authDomain: 'linkedin-clone-705da.firebaseapp.com',
  projectId: 'linkedin-clone-705da',
  storageBucket: 'linkedin-clone-705da.appspot.com',
  messagingSenderId: '959519936132',
  appId: '1:959519936132:web:7cd6f21ee8b2baf19bbcd1',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export { auth, provider, storage };
export default db;
