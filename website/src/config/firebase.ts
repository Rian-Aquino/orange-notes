import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, GithubAuthProvider, EmailAuthProvider, getAuth } from 'firebase/auth';
import 'firebase/firestore';
import config from './config';

const Firebase = initializeApp(config.firebase);

export const Providers = {
  google: new GoogleAuthProvider(),
  github: new GithubAuthProvider(),
  email: new EmailAuthProvider()
};

export const auth = getAuth(Firebase);
export default Firebase;
