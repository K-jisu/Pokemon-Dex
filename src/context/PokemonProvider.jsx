import React from 'react';
import useCardManager from '../utils/useCardManager';
import { PokemonContext } from './PokemonContext';

const PokemonProvider = ({children}) => {
  const { data, addCard, removeCard } = useCardManager();

  return (
    <PokemonContext.Provider value={{ data, addCard, removeCard }}>
      {children}
    </PokemonContext.Provider>

  );
};

export default PokemonProvider;