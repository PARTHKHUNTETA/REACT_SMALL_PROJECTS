import React from "react";
import MenuItem from "./menu-item";

const MenuList = ({ menu }) => {
  return (
    <ul className="menu-list-container">
      {menu && menu.length > 0
        ? menu.map((listItem) => <MenuItem key={listItem.label} listItem={listItem} />)
        : null}
    </ul>
  );
};

export default MenuList;
