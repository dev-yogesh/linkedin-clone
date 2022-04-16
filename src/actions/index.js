import { signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';

import { auth, provider, storage, db } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { SET_USER, SET_LOADING_STATUS, GET_ARTICLES } from './actionType';

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export function signInAPI() {
  return (dispatch) => {
    provider.setCustomParameters({ prompt: 'select_account' });

    signInWithPopup(auth, provider)
      .then((payload) => {
        dispatch(setUser(payload.user));
      })
      .catch((error) => alert(error.message));
  };
}

export function getUserAuth() {
  return (dispatch) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
}

export function signOutAPI() {
  return (dispatch) => {
    signOut(auth)
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => {
        alert(error.message);
      });
  };
}

export function postArticleAPI(payload) {
  console.log('payload', payload);

  return async (dispatch) => {
    if (payload.image != '') {
      const storageRef = ref(storage, `images/${payload.image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, payload.image);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          console.log(`Progress: ${progress}%`);
        },
        (error) => console.log(error),
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          try {
            const docRef = await addDoc(collection(db, 'articles'), {
              actor: {
                description: payload.user.email,
                title: payload.user.displayName,
                date: payload.timestamp,
                image: payload.user.photoURL,
              },
              video: payload.video,
              sharedImg: downloadURL,
              comments: 0,
              description: payload.description,
            });
            console.log('Document written with ID: ', docRef.id);
          } catch (e) {
            console.error('Error adding document: ', e);
          }
        }
      );
    } else if (payload.video) {
      try {
        const docRef = await addDoc(collection(db, 'articles'), {
          actor: {
            description: payload.user.email,
            title: payload.user.displayName,
            date: payload.timestamp,
            image: payload.user.photoURL,
          },
          video: payload.video,
          sharedImg: '',
          comments: 0,
          description: payload.description,
        });
        console.log('Document written with ID: ', docRef.id);
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    }
  };
}
