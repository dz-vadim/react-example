import React from 'react'
import {Route,  Navigate, Routes} from "react-router-dom"
import About from './UI/pages/About'
import Posts from './UI/pages/Posts'
import Error from './UI/pages/Error'
import PostIdPage from './UI/pages/PostIdPage'

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/about" element={<About />} />
            <Route exatc path="/posts" element={<Posts />} />
            <Route exatc path="/posts/:id" element={<PostIdPage/>} />
            <Route path="/error" element={<Error />} />
            <Route
                path="*"
                element={<Navigate to="/error" replace />}
            />
        </Routes>
    )
}

export default AppRouter