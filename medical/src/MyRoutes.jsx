import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home'; 
import About from './About';
import Layout from './Layout';
import Sign from './Sign';
import New_account from './New_account';
function MyRouter() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="signup" element={<Sign />} />
          <Route path="New_account" element={<New_account/>} />
            <Route path="/" element={<Layout/>} >
              <Route index element={<Home/>} />
              <Route path="about" element={<About/>} />
              
              
           </Route>
        </Routes>
        </BrowserRouter>
  );
}

export default MyRouter