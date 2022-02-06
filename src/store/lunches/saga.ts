import { PayloadAction } from "@reduxjs/toolkit";
import { takeLatest, call, put, take } from "redux-saga/effects";
import { actions } from "./slice";
import { Action, Lunch } from "./../../models/app";
import axios from 'axios'
import { ApiClient } from "../../utils/ApiClient";

function* getRandomLunch({ payload }: Action){
  try {
    const { data } = yield call(ApiClient.get, "/random/");
    yield put(actions.setLunch(data));
  } catch (error) {
    console.log(error);
  }
}

export function* lunchesSaga() {
  yield takeLatest(actions.getRandomLunch.type, getRandomLunch);
}
