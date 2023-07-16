import React, { useRef, useState } from 'react'

const Comp07 = ({onInsert}) => {
    const [form, setForm] = useState({
        code: 4,
        name: '냉장고',
        price: 250
    });

    const {code, name, price} = form;
    const ref_name = useRef(null);

    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(window.confirm('저장하실래요?')){
            setForm({
                code: code+1,
                name: '',
                price: ''
            });
            ref_name.current.focus();
            onInsert(form);
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <input name='code' readOnly placeholder='상품코드'
                value={code} onChange={onChange}/>
            <span>{code}</span>    
            <hr/>
            <input name='name' ref={ref_name} placeholder='상품이름'
                value={name} onChange={onChange}/>
            <span>{name}</span>    
            <hr/>
            <input name='price' placeholder='상품가격'
                value={price} onChange={onChange}/>
            <span>{price}</span>    
            <hr/>
            <button>입력</button>
        </form>
    )
}

export default Comp07