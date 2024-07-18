import React from 'react'
import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    // Bussiness Logic
    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }

    return (
        <>
            <button onClick={handleIncrement}>+</button>
            <h3>{count}</h3>
            <button onClick={handleDecrement}>-</button>
        </>
    )
}

export default Counter