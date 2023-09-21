 import { combineReducers } from '@reduxjs/toolkit';
  import { filterReducer } from './FilterSlice';
 
  import { contactsapi } from './contactsapi';
  
  const rootReducer = combineReducers({
   
    filter: filterReducer,
    [contactsapi.reducerPath]: contactsapi.reducer,
  });
  
  export default rootReducer;