import React from "react";

const Breadcrumb = ({ page }) => {
  //   console.log(page);
  return (
    <div>
      <ul className="breadcrumb">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#">{page}</a>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
