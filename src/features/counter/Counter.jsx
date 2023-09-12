import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {increment, decrement, reset, handleInputChange, increaseByAmount} from './counterSlice'


export default function Counter() {
    const count = useSelector((state)=> state.counter.count);
    const input = useSelector((state)=> state.counter.input);

    const dispatch = useDispatch();

    return (
        <div>
            <div>{count}</div>
            <button onClick={()=> dispatch(increment())}>Increment</button>
            <button onClick={()=> dispatch(decrement())}>Decrement</button>
            <div>
                <input value={input} onChange={(e)=> dispatch(handleInputChange(Number(e.target.value)))}/>
                <button onClick={()=> dispatch(increaseByAmount())}>Increase By</button>
            </div>
            <div>
                <button onClick={()=> dispatch(reset())}>Reset</button>
            </div>
        </div>
    );
};
