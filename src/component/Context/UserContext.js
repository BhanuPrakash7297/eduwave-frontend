import React, { createContext, useState, useEffect } from "react";
import app from "../firebase/firebase.config";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";


const auth = getAuth(app);
export const AuthContext = createContext();

const UserContext = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(true);

  const createUser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setloading(true);
    toast("LogOut Sucessfull");
    setUser(null);
    return signOut(auth);
  };
  const updateName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    });
  };



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setloading(false);
      return unsubscribe();
    });
  }, []);
  const authInfo = {
    user,
    createUser,
    signIn,
    updateName,
    setUser,
    logOut,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
