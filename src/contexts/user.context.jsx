// FIXME this was replaced with Redux setup
const { createContext, useReducer } = require("react");

const USER_ACTIONS = {
  SET_CURRENT_USER: "SET_CURRENT-USER",
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTIONS.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      throw Error("Invalid action type");
  }
};

const initialState = {
  currentUser: null,
  setCurrentUser: () => null,
};

export const UserContext = createContext(initialState);

export const UserContextProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, initialState);
  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTIONS.SET_CURRENT_USER, payload: user });
  };
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
