import React, { useState } from "react";
import { Link } from "react-router-dom";

import { withRouter } from "react-router-dom";
const SearchBar = (props) => {
  const [query, setQuery] = useState("");
  function handleChange(e) {
    setQuery(e.target.value);
  }
  function handleSubmit(event) {
    console.log("query is: " + query);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search:
        <input type="text" name="query" value={query} onChange={handleChange} />
      </label>

      <Link to={{ pathname: "/search", state: query }}>Search</Link>
    </form>
  );
};
export default withRouter(SearchBar);
