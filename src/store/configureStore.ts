import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { reducer as countryReducer } from "./lunches/slice";
import { lunchesSaga } from "./lunches/saga";
export const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  countriesState: countryReducer,
});

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(lunchesSaga);

export default store;
