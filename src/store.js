import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import pageSlice from "./component/Signup/pageSlice";
import userSlice from "./component/Signup/userSlice";

const persistConfig = {
  key: "root", 
  storage,
};

export const rootReducer = combineReducers({
  page: pageSlice,
  user: userSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
