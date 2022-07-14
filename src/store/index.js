import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userReducer from "./user.reducer";

export default configureStore({
  reducer: { user: userReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});
