import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import api from "./middleware/api"

import reducer from './reducer';

export default function defineStore() {
  return configureStore({
    reducer: reducer,
    middleware: [
      ...getDefaultMiddleware({
        serializableCheck: false
      }),
      api,
    ]
  });
}
