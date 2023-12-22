import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { useGlobalContext } from "./useGlobalContext";

function useSignup() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const { dispatch } = useGlobalContext();

  const signup = (displayName, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        await updateProfile(auth.currentUser, {
          displayName,
        });
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.error.message;
        setError(errorMessage);
        console.log(errorMessage);
      });
  };

  return { user, error, signup };
}

export default useSignup;
