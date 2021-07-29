import React from "react";

const Breadcrumb = ({ page }) => {
  //   console.log(page);
  return (
    <ul className="breadcrumb">
      <li>
        <a href="/">Home /</a>
      </li>
      <li>
        <a href="#">{page}</a>
      </li>
    </ul>
  );
};

export default Breadcrumb;
