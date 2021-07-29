import React from "react";
import Header from "./partials/Header.component";
import Footer from "./partials/Footer.component";

const DefaultLayout = ({ children }) => {
  return (
    <div
    // className="default-layout"
    >
      <Header />

      {/* <main */}
      {/* // className="main" */}
      {/* > */}
      {children}
      {/* </main> */}

      <Footer />
    </div>
  );
};

export default DefaultLayout;
