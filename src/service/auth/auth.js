import {
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import firebaseApp from "../firebase/firebase";

class Auth {
  constructor() {
    this.auth = getAuth(firebaseApp);
    this.googleAuth = new GoogleAuthProvider();
    this.githubAuth = new GithubAuthProvider();
    this.facebookAuth = new FacebookAuthProvider();
  }

  login(provider) {
    return fetch(signInWithPopup(this.auth, this[`${provider}Auth`]));
  }

  observeChange(fn) {
    return onAuthStateChanged(this.auth, (user) => {
      user && fn({ uid: user.uid, id: user.displayName });
    });
  }
}

export default Auth;
