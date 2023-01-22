import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>

      <div className="userChat">
        <div className="userChatInfo">
          <span>displayName</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
