import { createContext, useReducer } from 'react';

export const AnimalsContext = createContext();

export const animalsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ANIMALS':
      return {
        animals: action.payload,
      };
    case 'CREATE_ANIMAL':
      return {
        animals: [action.payload, ...state.animals],
      };
    case 'DELETE_ANIMAL':
      return {
        animals: state.animals.filter((animal) => animal._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const AnimalsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(animalsReducer, {
    animals: null,
  });

  return (
    <AnimalsContext.Provider value={{ ...state, dispatch }}>{children}</AnimalsContext.Provider>
  );
};
