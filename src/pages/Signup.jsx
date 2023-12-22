import SignupBgVideo from "../video/pexels_videos_egg-sm(720p).mp4";

//sign up
import useSignup from "../hooks/useSignup";
import { useRef } from "react";

import React from "react";

function Signup() {
  const { signup, error, user } = useSignup();
  const displayName = useRef();
  const email = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    signup(
      displayName.current.value,
      email.current.value,
      password.current.value
    );

    displayName.current.value = "";
    email.current.value = "";
    password.current.value = "";
  };
  return (
    <div className="h-screen grid place-items-center relative">
      <video
        muted
        autoPlay
        loop
        className="absolute h-screen w-screen object-cover z-[-1]"
        src={SignupBgVideo}
      ></video>
      <div className="grid place-items-center text-white h-screen bg-black bg-opacity-25 w-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center py-8 md:py-10 px-5 md:px-7 bg-white bg-opacity-30 rounded"
        >
          <h1 className="text-3xl md:text-4xl mb-5 md:mb-7">Signup</h1>
          <div className="flex flex-col gap-3">
            <label className="label">
              <span className="md:text-xl">Name:</span>
              <input
                ref={displayName}
                required
                placeholder="your name"
                type="text"
                className="input"
              />
            </label>
            <label className="label">
              <span className="md:text-xl">Email:</span>
              <input
                ref={email}
                required
                placeholder="your email"
                type="email"
                className="input"
              />
            </label>
            <label className="label">
              <span className="md:text-xl">Password:</span>
              <input
                ref={password}
                required
                placeholder="your password"
                type="password"
                className="input"
              />
            </label>
            <button className="btn animation bg-green-400">Signup</button>
            <hr />
            <div className="flex gap-3 items-center justify-between">
              <span>if you already have an account:</span>
              <a
                href="login"
                className="btn animation bg-emerald-900 px-2 py-1 text-md"
              >
                Login
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
