import React from "react";
import logo from "../../assets/img/MrsZhur.png";

const Header = () => {
  return (
    <header>
      <img className="logo" src={logo} alt="Logo" />
      <nav>
        <ul>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/tickets">Tickets</a>
          </li>
          <li>
            <a href="/logout">Logout</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
