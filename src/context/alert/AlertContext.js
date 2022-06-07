import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducer";

// create the context //
const AlertContext = createContext();
// create the Provider with initialState //
export const AlertProvider = ({ children }) => {
  const initialState = null;

  // use useReducer hook //
  const [state, dispatch] = useReducer(alertReducer, initialState);

  // set an alert //
  const setAlert = (msg, type) => {
    dispatch({
      type: "SET_ALERT",
      payload: { msg, type },
    });
    setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 3000);
  };

  return (
    <AlertContext.Provider value={{ alert: state }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
