import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router'
import Home from './pages/Home'
import Blog from './pages/Blog'
import ContactPage from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
          <Routes>          
              <Route path="/" element={<Home/>}/>
              <Route path="/blog" element={<Blog/>}/>
              <Route path="/contact" element={<ContactPage/>}/>
          </Routes>
    </BrowserRouter>
  )
}
