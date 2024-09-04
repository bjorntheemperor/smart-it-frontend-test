import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {FilterDataType} from "../types/FilterData";

const initialState: FilterDataType = {
    name: "",
    username: "",
    email: "",
    phone: "",
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter: (state, action: PayloadAction<Partial<FilterDataType>>) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
