import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //google provider
  const provider = new GoogleAuthProvider();
  //email login with password
  const emailLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //registration with email and password
  const emailRegistration = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //update registration information
  const updateInfo = (name, PhotoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: PhotoURL,
    });
  };

  //sign in with popup

  const popUpSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //logOut
  const signOutFromWeb = () => {
    return signOut(auth);
  };

  //auth information

  const authenticationInfo = {
    user,
    loading,
    emailLogin,
    emailRegistration,
    updateInfo,
    signOutFromWeb,
    popUpSignIn,
  };
  //update auth information

  //unsubscribe
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe;
    };
  }, []);

  return (
    <AuthContext.Provider value={authenticationInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
