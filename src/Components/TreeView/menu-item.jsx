import React, { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";
const MenuItem = ({ listItem }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
  function handleToggleChildren(currentLabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [currentLabel]: !displayCurrentChildren[currentLabel],
    });
    console.log(displayCurrentChildren);
  }
  return (
    <li>
      <div className="menu-item">
        <p>{listItem.label}</p>
        {listItem && listItem.children && listItem.children.length > 0 ? (
          <span onClick={() => handleToggleChildren(listItem.label)}>
            {displayCurrentChildren[listItem.label] ? <FaMinus /> : <FaPlus />}
          </span>
        ) : null}
      </div>
      {listItem &&
      listItem.children &&
      listItem.children.length > 0 &&
      displayCurrentChildren[listItem.label] ? (
        <MenuList menu={listItem.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
