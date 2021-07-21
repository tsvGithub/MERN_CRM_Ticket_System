import React from "react";

const Header = () => {
  return (
    <header>
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
