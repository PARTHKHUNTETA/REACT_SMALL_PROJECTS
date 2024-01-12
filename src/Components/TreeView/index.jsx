import React from "react";
import MenuList from "./menu-list";
import menu from "./data";
import './style.css'
const index = () => {
  return (
    <div className="tree-view-container">
      <MenuList menu={menu} />
    </div>
  );
};

export default index;
