import { createContext, useReducer } from "react";

export const ContextGlobal = createContext(undefined);

export const iniitalState = {
  theme: "",
  dentist:[],
  favs: JSON.parse(localStorage.getItem('favs')) || [],
}

const reducer = (state,action) => {
  switch(action.type) {
    case "TOGGLE_THEME":
      return {...state, theme: action.payload}
    case "FAV":
      const updatedData = state.favs ? [...state.favs, action.payload] : [action.payload];
      localStorage.setItem("favData", JSON.stringify(updatedData));
    return { ...state, favs: updatedData };

    default:
      return state;
  }
}

export default reducer;

export const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, iniitalState);


  const tema = (thema) => {
    dispatch({type: "TOGGLE_THEME", payload:thema})
  }

  const addFav = (fav) => {
    dispatch({type: "FAV", payload:fav})
  }

  const context = {
    tema,
    state,
    addFav
  }

  return (
    <ContextGlobal.Provider value={context}>
      {children}
    </ContextGlobal.Provider>
  );
  
};
