import React, {useState} from 'react';

import Counter from './features/counter/Counter/';



export default function App() {
    const [count, setCount] = useState(0);
    return(
        <>
           <Counter/> 
        </>
    );
};