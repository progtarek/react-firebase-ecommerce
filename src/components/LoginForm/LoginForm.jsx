import React, { useState } from "react";
import { setCurrentUser } from "../../store/user.reducer";
import {
  signInWithGooglePopup,
  createUserFromGoogleAuth,
  signInWithGoogleEmailAndPassword,
} from "../../utils/firebase.util";
import { Button } from "../Button/Button.component";
import "./LoginForm.scss";
import { useDispatch } from "react-redux";

const loginFields = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  const [loginFieldsState, setLoginFields] = useState(loginFields);
  const { email, password } = loginFieldsState;
  const dispatch = useDispatch();

  const loginWithGoogleHandler = async () => {
    const { user } = await signInWithGooglePopup();
    try {
      dispatch(setCurrentUser(user));
      await createUserFromGoogleAuth(user);
      alert("Logged in successfully");
    } catch (error) {}
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setLoginFields({ ...loginFieldsState, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await signInWithGoogleEmailAndPassword(email, password)
      .then((res) => {
        dispatch(setCurrentUser(res.user));
        alert("Logged in successfully");
      })
      .catch((err) => {
        console.log(err);
        switch (err.code) {
          case "auth/user-not-found":
            alert("User not found");
            break;
          case "auth/wrong-password":
            alert("Wrong email/passeord");
            break;

          default:
            console.log(err);
        }
      });
  };

  return (
    <div className="login-container">
      <h3>Have an account</h3>
      <form onSubmit={onSubmitHandler}>
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
        <div className="actions-container">
          <Button type="submit" theme="dark">
            Login
          </Button>
          <Button
            type="button"
            theme="primary"
            onClick={loginWithGoogleHandler}
          >
            Login with Google
          </Button>
        </div>
      </form>
    </div>
  );
};
