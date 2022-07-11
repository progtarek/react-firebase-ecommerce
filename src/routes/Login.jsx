import React from "react";
import { signInWithGooglePopup } from "../utils/firebase.util";

export const Login = () => {
  const loginWithGoogleHandler = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      <button onClick={loginWithGoogleHandler}>Login with Google</button>
    </div>
  );
};
