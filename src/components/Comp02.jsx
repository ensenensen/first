import React from 'react'
import Student from './Student'

const Comp02 = () => {
    const student = {
        no: '1', name:'홍길동', dept:'컴정과'
    }
    const student1 = {
        no: '2', name:'심청이', dept:'전자과'
    }
    return (
        <div>
            <Student stu={student}/>
            <hr/>
            <Student stu={student1}/>
            <hr/>
            <Student stu={student1}/>
        </div>
    )
}

export default Comp02