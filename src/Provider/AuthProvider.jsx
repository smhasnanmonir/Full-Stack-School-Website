import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import { set } from "react-hook-form";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //email login with password
  const emailLogin = () => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //registration with email and password
  const emailRegistration = () => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //auth information

  const authenticationInfo = {
    user,
    loading,
    emailLogin,
    emailRegistration,
  };

  //unsubscribe
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(user);
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
