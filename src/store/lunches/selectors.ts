import { createSelector } from "reselect";
import { RootState } from "../../models/app";

const selectDomain = (state: RootState) => state.countriesState;

export const selectLoading = createSelector(
  [selectDomain],
  ({ loading }) => loading
);
//export const selectError = createSelector([selectDomain], ({ error }) => error);

export const selectRandomLunch = createSelector(
  [selectDomain],
  ({ randomLunch }) => randomLunch
);
