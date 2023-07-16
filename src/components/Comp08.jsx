import React, { useState } from 'react'
import Comp07 from './Comp07'

const Comp08 = () => {
    const [products, setProducts] = useState([
        {code: 1, name:'오브제 냉장고', price:350},
        {code: 2, name:'삼성세탁기', price:250},
        {code: 3, name:'오브제 스타일러', price:150}
    ]);

    const onInsert = (product) => {
        setProducts(products.concat(product));
    }
    
    const onDelete = (code)=> {
        if(window.confirm(code + '번 상품을 삭제하실래요?')) {
            setProducts(products.filter(p=>p.code !== code))
        }
    }

    return (
        <div>
            <Comp07 onInsert={onInsert}/>
            <h2>상품목록</h2>
            <table>
                <thead>
                    <tr>
                        <td>상품코드</td>
                        <td>상품이름</td>
                        <td>상품가격</td>
                        <td>상품삭제</td>
                    </tr>
                </thead>
                <tbody>
                    {products.map((p, index)=>
                        <tr key={index}>
                            <td>{p.code}</td>
                            <td>{p.name}</td>
                            <td>{p.price}</td>
                            <td><button onClick={()=>onDelete(p.code)}>삭제</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Comp08