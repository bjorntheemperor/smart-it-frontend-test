import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {fetchUsers} from "../fetchUsers";
import {User, Users} from "../types/User";

export const getUsers = createAsyncThunk<User[]>('users/getUsers', async () => {
        try {
            const response = await fetchUsers()
            return response || []
        } catch (error) {
            console.error('Failed to get users:', error)
            return []
        }
    }
);

const initialState: Users = {
    users: [],
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.fulfilled, (state, action) => {
                state.users = action.payload
            })
    },
});

export default userSlice.reducer