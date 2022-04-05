import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const changeActive = createSlice({
  name: "change",
  initialState,
  reducers: {
    home: (state) => {
      state.value = "home";
    },
    about: (state) => {
      state.value = "about";
    },
    experiences: (state) => {
      state.value = "experiences";
    },
    portfolio: (state) => {
      state.value = "portfolio";
    },
    contact: (state) => {
      state.value = "contact";
    },
  },
});

// Action creators are generated for each case reducer function
export const { home, about, experiences, portfolio, contact } =
  changeActive.actions;

export default changeActive.reducer;
