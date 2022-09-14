import { createContext, useReducer } from "react";

export const Context = createContext();

const initialState = {
  dark: false,
}

function reducer(state, action) {
  switch(action.type) {
    case "DARK_MODE": {
      return { ...state, dark: !state.dark }
    }

    default:
      return state;
  }
}

export function ContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  )
}




