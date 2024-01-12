import React from "react";
import useLocalStorage from "./useLocalStorage";
import "./style.css";
const index = () => {
  const [value, setValue] = useLocalStorage("theme", "dark");
  function handleToggleTheme() {
    setValue(value === "light" ? "dark" : "light");
  }
  return (
    <div className="light-dark-mode" data-theme={value}>
      <div className="container">
        <h1>Welcome to the Home Page</h1>
        <button onClick={handleToggleTheme}>Change the Theme</button>
      </div>
    </div>
  );
};

export default index;
