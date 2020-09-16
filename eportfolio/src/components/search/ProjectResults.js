import React from "react";
import SearchCard from "./ProjectSearchCard";

const projectCard = () => (
  <div className="flex-container">
    <div className="cp-1">
      <SearchCard />
    </div>

    <div className="cp-2">
      <SearchCard />
    </div>
  </div>
);

export default projectCard;
