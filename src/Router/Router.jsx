import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Home from '../Components/Home/Home'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<Layout/>} >
            <Route path="/" element={<Home/>} />
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Router