import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice.js";
import propertyReducer from "./user/propertySlice.js";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

// Combine your reducers (in case you have more in the future)
const rootReducer = combineReducers({
  user: userReducer,
  property: propertyReducer,
});

// Configuration for Redux Persist
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure and create the Redux store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for redux-persist compatibility
    }),
});

// Create the persistor for the store
export const persistor = persistStore(store);
