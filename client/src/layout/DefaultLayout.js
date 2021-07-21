import React from "react";
import Header from "./partials/Header.component";
import Footer from "./partials/Footer.component";

const DefaultLayout = ({ children }) => {
  return (
    <div className="default-layout">
      <header className="header">
        <Header />
      </header>
      <main className="main">{children}</main>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default DefaultLayout;
