import { getRedirectResult } from "firebase/auth";
import React, { useEffect } from "react";

import {
  auth,
  signInWithGooglePopup,
  createUserFromGoogleAuth,
  signInWithGoogleRedirect,
} from "../utils/firebase.util";

export const Login = () => {
  const loginWithGoogleHandler = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserFromGoogleAuth(user);
  };

  useEffect(() => {
    getRedirectResult(auth)
      .then(async (response) => {
        console.log("response", response);
        response?.user && (await createUserFromGoogleAuth(response.user));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <button onClick={loginWithGoogleHandler}>Login with Google</button>
      <button onClick={signInWithGoogleRedirect}>
        Login with Google Redirect
      </button>
    </div>
  );
};
