import React, { useState, useEffect } from "react";
import userSearch from "../../algolia/searchFunctions.js";
import ProfileCard from "../profile/ProfileCard";

function PeopleResults(props) {
  const [userData, setUserData] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setUserData({ loading: true });
    userSearch(props.query).then((res) => {
      setUserData({ loading: false, repos: res });
    });
  }, [props.query]);

  if (userData.repos == null || props.query == "") {
    return (
      <div>
        <h1>No profile found</h1>
      </div>
    );
  } else {
    console.log(userData.repos);
    return (
      <div>
        {userData.repos.map((user) => (
          <ProfileCard key={user.objectID} {...user} />
        ))}
      </div>
    );
  }
}

export default PeopleResults;
