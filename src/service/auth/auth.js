import {
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from 'firebase/auth';
import firebaseApp from '../firebase/firebase';

class Auth {
  constructor() {
    this.auth = getAuth(firebaseApp);
    this.googleAuth = new GoogleAuthProvider();
    this.githubAuth = new GithubAuthProvider();
    this.facebookAuth = new FacebookAuthProvider();
  }

  async login(provider) {
    return fetch(signInWithPopup(this.auth, this[`${provider}Auth`]));
  }

  async observeChange(fn) {
    return onAuthStateChanged(this.auth, fn);
  }
}

export default Auth;
