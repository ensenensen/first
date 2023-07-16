import React from 'react'

const Comp01 = () => {
    const name="리액트";
    const nickname="";
    return (
        <div>
            <h1>JSX문법</h1>
            <h2 style={{color:'pink', fontSize:'30px'}}>안녕하세요! {name}</h2>
            { name === '리액트' ? <h2>리액트 입니다.</h2> : <h2>리액트가 아닙니다.</h2> }
            { name && <h2>이름이 존재합니다.</h2>}
            { nickname || <h2>별명이 존재하지않습니다.</h2> }
        </div>
    )
}

export default Comp01