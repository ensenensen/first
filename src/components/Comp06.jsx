import React, { useRef, useState } from 'react'

const Comp06 = () => {
    const [name, setName] = useState("홍길동");
    const [address, setAddress] = useState("인천 서구 경서동");
    const ref_name = useRef(null);

    const onClick = ()=> {
        alert('이름:' + name + "\n주소:" + address);
        setName('');
        setAddress('');
        ref_name.current.focus();
    }

    const onKeyPress = (e) => {
        if(e.key === 'Enter') {
            onClick();
        }
    }

    return (
        <div>
            <input placeholder='이름을 입력하세요!'
                value={name}
                ref={ref_name}
                onChange={(e)=>setName(e.target.value)}/>
            <span>{name}</span>    
            <hr/>
            <input placeholder='주소를 입력하세요!' 
                value={address}
                onKeyPress={onKeyPress}
                onChange={(e)=>setAddress(e.target.value)}/>
            <span>{address}</span>    
            <hr/>
            <button onClick={ onClick }>확인</button>
        </div>
    )
}

export default Comp06