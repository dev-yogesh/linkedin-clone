import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCQXpju-Mi97FPODmP0xlHS_xRSo0a4tMU',
  authDomain: 'linkedin-clone-705da.firebaseapp.com',
  projectId: 'linkedin-clone-705da',
  storageBucket: 'linkedin-clone-705da.appspot.com',
  messagingSenderId: '959519936132',
  appId: '1:959519936132:web:7cd6f21ee8b2baf19bbcd1',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
const db = getFirestore(app);

export { auth, provider, storage, db };
