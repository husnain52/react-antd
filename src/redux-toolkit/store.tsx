import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../views/HomePage/slice";
import userData from "../views/Login/slice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../views/Users/saga";
import data from "views/Login/slice";

// create the saga middleware
let sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    data: userData,
    tableData: data,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// then run the saga
sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
