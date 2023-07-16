import React, { useState } from 'react'

const Comp04 = () => {
    const [count, setCount] = useState(1);
    const onIncrease = () => {
        setCount(count+1);
    }

    const onDecrease = () => {
        setCount(count-1);
    }

    return (
        <div>
            <button onClick={onDecrease}>감소</button>
            <span style={{padding:'20px'}}>{count}</span>
            <button onClick={onIncrease}>증가</button>
        </div>
    )
}

export default Comp04