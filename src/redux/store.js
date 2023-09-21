import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import { contactsapi } from './contactsapi';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsapi.middleware),
});

export default store;