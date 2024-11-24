import React from "react";
import logo from "../../assets/logo.png";

export const Footer: React.FC = () => {
  return (
    <footer>
      <img src={logo} alt="logo de Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};
