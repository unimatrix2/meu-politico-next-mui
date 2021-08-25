import { useReducer, createContext } from "react";
import themeStore from "./stores/theme.store";

const initialState = {
	deviceWindow: {},
	user: {},
};

const ThemeContext = createContext({});

const combineReducers =
  (...reducers) =>
  (state, action) => {
    for (let i = 0; i < reducers.length; i++) {
    	state = reducers[i](state, action);
    }
    return state;
  };

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(
    combineReducers(themeStore),
    initialState
  );
  const value = { state, dispatch };
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, Provider };