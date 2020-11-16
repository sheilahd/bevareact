import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyA7xZcSN7j2YlnOa48aFnWfbsFXBUPNqyU",
  authDomain: "revit-b9ab4.firebaseapp.com",
  databaseURL: "https://revit-b9ab4.firebaseio.com",
  projectId: "revit-b9ab4",
  storageBucket: "revit-b9ab4.appspot.com",
  messagingSenderId: "1063119895592",
  appId: "1:1063119895592:web:7b269871d55f0e079dc91d",
  measurementId: "G-49TZQ3S4M5",
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    /* Helper */

    this.serverValue = app.database.ServerValue;
    this.emailAuthProvider = app.auth.EmailAuthProvider;
    this.auth = app.auth();
    this.db = app.database();
  }
  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);

  // *** Merge Auth and DB User API *** //

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        this.user(authUser.uid)
          .once("value")
          .then((snapshot) => {
            const dbUser = snapshot.val();

            if (!dbUser.roles) {
              dbUser.roles = [];
            }

            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              ...dbUser,
            };

            next(authUser);
          });
      } else {
        fallback();
      }
    });

  // *** User API ***

  user = (uid) => this.db.ref(`users/${uid}`);

  users = () => this.db.ref("users");

  // *** Review API ***

  review = (uid) => this.db.ref(`reviews/${uid}`);

  reviews = () => this.db.ref("reviews");

  // *** Addin API ***

  addin = (uid) => this.db.ref(`addins/${uid}`);

  addins = () => this.db.ref("addins");
}

export default Firebase;
