import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { createInjectorsEnhancer } from "redux-injectors";

function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    ...injectedReducers,
    // other non-injected reducers can go here...
  });

  return rootReducer;
}

const initialState: {} | any = {};
// create the saga middleware
let sagaMiddleware = createSagaMiddleware();

const { run: runSaga } = sagaMiddleware;

// for injectors
const enhancers = [
  createInjectorsEnhancer({
    createReducer,
    runSaga,
  }),
];

export const store = configureStore({
  reducer: createReducer(),
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) => {
    return [...getDefaultMiddleware(), sagaMiddleware];
  },
  enhancers,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
