import React from "react"
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { About } from "./pages/about/About";
import './App.scss';
import logo from "./assets/logo.png"
import { Header } from "./common/header/Header";
import { Gallery } from "./pages/gallery/Gallery";

export const App: React.FC = () => {


  return (
    <>
      <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<Gallery />} />
      <Route path="/about" element={<About />} />  
   
   {/* <Route path="/home" element={<Home />}/> */}
      </Routes>
      </Router>
      <footer>
<img src={logo} alt="logo de Kasa" />
<p>© 2020 Kasa. All rights reserved</p>
</footer>
      </>
  )
}

