import { AnimalsContext } from '../context/AnimalContext';
import { useContext } from 'react';

export const useAnimalsContext = () => {
  const context = useContext(AnimalsContext);

  if (!context) {
    throw Error('useAnimalsContext must be used inside an AnimalsContextProvider');
  }

  return context;
};
