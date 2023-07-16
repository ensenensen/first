import React from 'react'
import Student from './Student'

const Comp03 = () => {
    const students = [
        {no: 1, name:'홍길동', dept:'컴정과'},
        {no: 2, name:'심청이', dept:'전자과'},
        {no: 3, name:'강감찬', dept:'통신과'},
    ]

    return (
        <div>
            {students.map(stu=>
                <div key={stu.no}>
                    <Student stu={stu}/>
                    <hr/>
                </div>
            )}
        </div>
    )
}

export default Comp03