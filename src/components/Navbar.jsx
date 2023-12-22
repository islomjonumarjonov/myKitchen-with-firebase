import React from "react";

//logout
import { signOut } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { Link } from "react-router-dom";

function Navbar() {
  const [isPanding, setIsPanding] = useState();
  const { dispatch, user } = useGlobalContext();

  const logout = () => {
    setIsPanding(true);
    signOut(auth)
      .then(() => {
        dispatch({ type: "LOGOUT" });
        setIsPanding(false);
      })
      .catch(() => {
        // setError("Something went wrong");
      });
  };
  return (
    <header className="bg-lime-200">
      <div className="max-container flex flex-col md:flex-row items-center md:justify-between py-4 gap-3">
        <Link to="/" className="font-bold text-2xl md:text-3xl ">
          My Kitchen
        </Link>
        <nav className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
          <p className="opacity-80 text-md md:text-lg">
            Welcome, {user.displayName}
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => logout()}
              className="btn bg-red-400 cursor-pointer text-white animation"
            >
              Logout
            </button>
            <Link
              to="create"
              className="btn bg-slate-400 cursor-pointer text-white animation"
            >
              Create
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
