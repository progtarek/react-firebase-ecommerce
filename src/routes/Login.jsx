import React from "react";
import {
  signInWithGooglePopup,
  createUserFromGoogleAuth,
} from "../utils/firebase.util";

export const Login = () => {
  const loginWithGoogleHandler = async () => {
    const response = await signInWithGooglePopup();
    await createUserFromGoogleAuth(response.user);
  };

  return (
    <div>
      <button onClick={loginWithGoogleHandler}>Login with Google</button>
    </div>
  );
};
