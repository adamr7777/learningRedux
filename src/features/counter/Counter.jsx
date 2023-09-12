import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {increment, decrement} from './counterSlice'


export default function Counter() {
    const count = useSelector((state)=> state.counter.count);
    const dispatch = useDispatch();

    return (
        <div>
            <div>{count}</div>
            <button onClick={()=> dispatch(increment())}>Increment</button>
            <button onClick={()=> dispatch(decrement())}>Decrement</button>
        </div>
    );
};
