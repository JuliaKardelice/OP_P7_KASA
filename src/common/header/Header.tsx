import React from "react";
import logo from '../../assets/logo.png';
import { NavLink } from "react-router-dom";

export const Header:React.FC = ()=>{

return (
<header>
          <img src={logo} alt="logo de Kasa" />
          <nav>
            <NavLink to="/home" className={({ isActive }) => isActive ? "active-link" : ""}>
              Accueil
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""} >
              A Propos
            </NavLink>

          </nav>
        </header>
)
}