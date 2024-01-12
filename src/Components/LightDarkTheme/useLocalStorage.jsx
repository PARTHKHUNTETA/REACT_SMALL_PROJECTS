import React, { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    let localValue;
    try {
      localValue =
        JSON.parse(localStorage.getItem(key)) || String(defaultValue);
    } catch (e) {
      console.log("Error parsing value");
      localValue = defaultValue;
    }
    return localValue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
