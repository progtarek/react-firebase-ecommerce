import React from "react";

import { SignupForm } from "../components/SignupForm/SignupForm.component";
import {
  signInWithGooglePopup,
  createUserFromGoogleAuth,
} from "../utils/firebase.util";
import "./Login.scss";

export const Login = () => {
  const loginWithGoogleHandler = async () => {
    const { user } = await signInWithGooglePopup();
    try {
      await createUserFromGoogleAuth(user);
      alert("Logged in successfully");
    } catch (error) {}
  };

  return (
    <div className="login-container">
      <div className="left">
        <button onClick={loginWithGoogleHandler}>Login with Google</button>
      </div>
      <div className="right">
        <SignupForm />
      </div>
    </div>
  );
};
