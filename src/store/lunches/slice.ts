import { AppState, Lunch, LunchState } from "./../../models/app";
import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState: AppState & LunchState = {
  randomLunch: undefined,
  loading: false,
  loadingLunch: false,
  errors: undefined,
};
const lunchSlice = createSlice({
  name: "countriesSlice",
  initialState,
  reducers: {
    getRandomLunch(state) {
      state.loadingLunch = true;
      state.loading = true;
    },
    setLunch(state, { payload }: PayloadAction<Lunch>) {
              state.randomLunch = payload;
              state.loading = false;
    },
  },
});

export const { actions, reducer, name: sliceName } = lunchSlice;
