import React, { useState } from 'react'

const Comp05 = () => {
    const [color, setColor] = useState('red');

    return (
        <div>
            <h1 style={{background: color, color:'white'}}>안녕하세요!</h1>
            <button style={{color:'red'}}   onClick={()=>setColor('red')}>빨강</button>
            <button style={{color:'blue'}}  onClick={()=>setColor('blue')}>파랑</button>
            <button style={{color:'green'}} onClick={()=>setColor('green')}>초록</button>
        </div>
    )
}

export default Comp05