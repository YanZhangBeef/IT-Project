import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import userSearch from "../../algolia/searchFunctions.js";
import ProfileCard from "../profile/ProfileCard";

const moreStyle = {
  color: "blue",
  textAlign: "center",
};

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

  if (userData.repos == null || props.query === "") {
    return (
      <div>
        <h1>No profile found</h1>
      </div>
    );
  } else {
    console.log(userData.repos);
    return (
      <div>
        <div>
          {userData.repos
            .filter((user, idx) => idx < 3)
            .map(({ objectID, ...user }) => (
              <ProfileCard
                key={objectID}
                {...user}
                userId={objectID}
                showViewProfileBtn={true}
              />
            ))}
        </div>

        <div className="mt-4" style={moreStyle}>
          <Link
            to={{
              pathname: "/results",
              state: { results: userData.repos, type: "people" },
            }}
          >
            <p>Load more people</p>{" "}
          </Link>
          <hr className="mt-2"></hr>
        </div>
      </div>
    );
  }
}

export default PeopleResults;
