import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    users: [
        { id: '0', name: 'Dude Lebowski' },
        { id: '1', name: 'Neil Young' },
        { id: '2', name: 'Dave Gray' }
    ]
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser(state, action) {
            state.push(action.payload);
        }
    }
});

export const selectAllUsers = (state)=> {
    return state.users.users;
};

export default usersSlice.reducer;