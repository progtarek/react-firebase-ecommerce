import React, { useState } from "react";
import { createGoogleUserWithEmailAndPassword } from "../../utils/firebase.util";
import "./SignupForm.component.scss";
const signupFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const SignupForm = () => {
  const [signupFieldsState, setSignupFields] = useState(signupFields);
  const { displayName, email, password, confirmPassword } = signupFieldsState;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setSignupFields({ ...signupFieldsState, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) return;
    try {
      await createGoogleUserWithEmailAndPassword(displayName, email, password);
      setSignupFields(signupFields);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="signup-form">
      <h3>Create new account</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Display Name:*</label>
          <input
            type="text"
            name="displayName"
            required
            value={displayName}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Email:*</label>
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Password:*</label>
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:*</label>
          <input
            type="password"
            name="confirmPassword"
            required
            value={confirmPassword}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};
