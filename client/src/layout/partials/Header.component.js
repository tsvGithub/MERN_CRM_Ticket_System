import React from "react";
import logo from "../../assets/img/logoCRM.png";

import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const logOut = () => {
    history.push("/");
  };
  return (
    <header>
      <img className="logo" src={logo} alt="Logo" title="Flaticon Logo made by www.flaticon.com" />
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
