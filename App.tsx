import React from "react"
import { Route, Routes, BrowserRouter as Router, NavLink } from 'react-router-dom'
import logo from './assets/logo.png';
import { About } from "./pages/about/About";
import { page404 } from "./pages/page404/page404";
import './App.scss';

export const App: React.FC = () => {


  return (
    <>
      <Router>
        <header>
          <img src={logo} alt="logo de Kasa" />
          <nav>
            <NavLink className={({ isActive }) => isActive ? "active-link" : ""} to="/">
              Accueil
            </NavLink>
            <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""} >
              A Propos
            </NavLink>

          </nav>
        </header>
      <Routes>
      
      <Route path="/about" element={<About />} />
      </Routes>
      <Route path ="/page404" element= { page404 } />
      </Router>
      <footer>
      <img src={logo} alt="logo de Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </>
  )
}

