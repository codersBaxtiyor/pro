import React from "react";
const mainHeader = ({ query, setQuery, searchParams }) => {
  const page = searchParams.get("page") || 0;
  const res = query ? `/search/${query}/${page}` : "/new";
  const newParams = (e) => {
    const params = e.target.value;
    setQuery(params);
  };
  return (
    <header>
      <div className="container">
        <div className="search-box">
          <input
            type="search"
            id="search"
            className="search-input"
            placeholder="search lessons ..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-btn" onClick={newParams}>
            <i className="bx bx-search"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default mainHeader;
