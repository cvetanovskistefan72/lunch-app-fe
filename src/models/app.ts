import store from "../store/configureStore";
export type RootState = ReturnType<typeof store.getState>;
export interface Action {
  // eslint-disable-next-line
  payload: any;
  type: string;
}
export interface AppState {
  loading: boolean;
  loadingLunch: boolean;
  errors: [] | undefined;
}


export interface LunchState{
  randomLunch: Lunch | undefined,
  lunches?: Lunch[]
}

export interface Lunch {
  id?: string | Number;
  title: String;
  recipe: String;
  description: String;
  ingredients: Ingredients[];
}


export interface Ingredients{
  id?: string | Number;
  title: string;
}
