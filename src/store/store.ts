import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import filterReducer from './filterSlice';
import {RootState} from "../types/RootState";

const store = configureStore({
    reducer: {
        users: userReducer,
        filter: filterReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type AppState = RootState;

export default store;