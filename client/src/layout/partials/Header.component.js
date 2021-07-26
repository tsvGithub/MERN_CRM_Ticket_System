import React from "react";
import logo from "../../assets/img/MrsZhur.png";

import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const logOut = () => {
    history.push("/");
  };
  return (
    <header>
      <img className="logo" src={logo} alt="Logo" />
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/tickets">Tickets</Link>
          </li>
          <li>
            <Link onClick={logOut}>Logout</Link>
            {/* <a href="/logout">Logout</a> */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
