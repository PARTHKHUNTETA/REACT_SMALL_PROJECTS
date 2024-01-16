import React, { useEffect, useState } from "react";
import "./style.css";
import Suggestion from "./Suggestion";
const index = ({ url }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  async function handleFetchData() {
    try {
      setLoading(true);
      let response = await fetch(url);
      if (!response.ok)
        throw new Error(
          `HTTP error! status: ${response.status} statusText: ${response.statusText}`
        );
      let data = await response.json();
      if (data && data.users && data.users.length > 0) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
      }
    } catch (e) {
      setError("An error occurred while fetching the data.");
      console.log(e);
      setLoading(false);
    }
  }
  function handleChange(e) {
    const query = e.target.value.toLowerCase();
    setSearchValue(query);
    if (query.length > 1) {
      const filteredData = users.filter((item) =>
        item.toLowerCase().includes(query)
      );
      console.log(filteredData);
      setFilteredUsers(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  }
  function handleClick(event) {
    setShowDropDown(false);
    setSearchValue(event.target.innerText);
    setFilteredUsers([]);
  }
  useEffect(() => {
    handleFetchData(url);
  }, [url]);

  if (error) return;

  return (
    <div className="search-autocomplete-users">
      <input
        value={searchValue}
        onChange={(e) => handleChange(e)}
        className="input-search-autocomplete"
        name="search-users"
        placeholder="Search users here ..."
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {showDropDown && (
            <Suggestion
              handleClick={handleClick}
              filteredUsers={filteredUsers}
            />
          )}
        </>
      )}
    </div>
  );
};

export default index;
