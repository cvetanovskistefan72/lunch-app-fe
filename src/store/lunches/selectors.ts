import { createSelector } from "reselect";
import { RootState } from "../../models/app";

const selectDomain = (state: RootState) => state.countriesState;
