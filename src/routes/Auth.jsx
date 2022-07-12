import React from "react";

import { SignupForm } from "../components/SignupForm/SignupForm.component";
import { LoginForm } from "../components/LoginForm/LoginForm";

import "./Auth.scss";

export const Auth = () => {
  return (
    <div className="container auth-container">
      <LoginForm />
      <SignupForm />
    </div>
  );
};
