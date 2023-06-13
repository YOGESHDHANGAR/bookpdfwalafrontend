// Header.js
import React, { useState } from "react";
import "./Header.css";

const Header = ({ onSearch }) => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleInputChange = (event) => {
    const keyword = event.target.value;
    setSearchKeyword(keyword);
    onSearch(keyword);
  };

  return (
    <div className="header_container">
      <div className="company_logo">
        <h1>BookPDFWala</h1>
      </div>
      <div className="search_bar">
        <input
          placeholder="Search"
          value={searchKeyword}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Header;
