import React from "react";
import "./style.css";
const Suggestion = ({ filteredUsers ,handleClick}) => {
  return (
    <ul className="list-results">
      {filteredUsers.map((item, index) => (
        <li onClick={handleClick}className="list-results-data"key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default Suggestion;
