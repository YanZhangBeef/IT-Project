import React, { useState } from "react";

import { withRouter } from "react-router-dom";

const SearchBar = (props) => {
  /* change query as user is typing in the search box */
  /* put this in Vincent's search box */
  function handleChange(e) {
    const query = document.getElementById("searchQuery").value;
    props.history.push({ pathname: "/search", state: query });
  }

  return (
    /* Put the <input> element in vincent's search box */
    <form>
      <label>
        Search:
        <input
          type="text"
          name="query"
          id="searchQuery"
          onChange={handleChange}
        />
      </label>
    </form>
  );
};

/* don't forget to use withRouter */
export default withRouter(SearchBar);
