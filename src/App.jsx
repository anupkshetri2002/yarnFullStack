import React from 'react'
import Navbar from './components/Navbar'
import Research from './pages/Research';
import Product from './pages/Product';
import Contact from './pages/Contact'
import About from './pages/About'
import {BrowserRouter,Route, Routes,} from "react-router-dom"
import Register from './pages/Register';
import LogIn from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';



function App() {
  
  return (
 
  <BrowserRouter>
   <Navbar />
  

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Research" element={<Research />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/LogIn" element={<LogIn />} />
      </Routes>
      <Profile />
      </BrowserRouter>
  

  );
}

export default App;
