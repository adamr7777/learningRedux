import {createSlice, nanoid} from '@reduxjs/toolkit';
import {sub} from 'date-fns'; 

const initialState = [
    {
        id: '1',
        userId: '1',
        title: 'Learning Redux Toolkit',
        content: "I've heard good things.",
        time: sub(new Date(), {minutes: 6}).toISOString()
    },
    {
        id: '2',
        userId: '2',
        title: 'Slices...',
        content: "The more I say slice, the more I want pizza.",
        time: sub(new Date(), {minutes: 10}).toISOString()
    }
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: {
            reducer(state, action) {
                state.unshift(action.payload)
            },
            prepare(title, userId, content) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId,
                        time: new Date().toISOString()
                    }
                }
            }
        }
    }
});


export const {addPost} = postsSlice.actions;

export const selectAllPosts = (state)=> state.posts

export default postsSlice.reducer; 