import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    count: 0,
    input: 0
};



export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state)=> {
            state.count += 1;
        },
        decrement: (state)=> {
            state.count -= 1;
        },
        reset: (state)=> {
            state.count = 0;
            state.input = 0;
        },
        handleInputChange: (state, action)=> {
            state.input = action.payload
        },
        increaseByAmount: (state)=> {
            state.count += state.input;
        }
    }
});


export const {increment, decrement, reset, handleInputChange, increaseByAmount} = counterSlice.actions;

export default counterSlice.reducer;