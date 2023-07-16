import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Comp01 from './Comp01';
import Comp09 from './Comp09';
import Comp10 from './Comp10';
import Post from './Post';

const RoutePage = () => {
  return (
    <div>
        <div>
            <Link to="/">홈</Link>
            <Link to="/todos">할일목록</Link>
            <Link to="/posts">게시글목록</Link>
        </div>
        <hr/>
        <Routes>
            <Route path="/" element={<Comp01/>}/>
            <Route path="/todos" element={<Comp09/>}/>
            <Route path="/posts" element={<Comp10/>}/>
            <Route path="/posts/:id" element={<Post/>}/>
        </Routes>
    </div>
  )
}

export default RoutePage