import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("pokeMon")) || [];

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addCard: (state, action) => {
      return [...state, action.payload];
    },
    removeCard: (state, action) => {
      return state.filter((card) => card.id !== action.payload);
    },
  },
});

export const { addCard, removeCard } = pokemonSlice.actions;
export default pokemonSlice.reducer;
