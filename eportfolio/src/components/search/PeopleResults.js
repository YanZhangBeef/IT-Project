import React, { useState, useEffect } from "react";
import userSearch from "../../algolia/searchFunctions";
import ProfileCard from "../profile/ProfileCard";
import { fakeProfile } from "../../TestData";

function PeopleResults(props) {
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    userSearch(props.query).then((res) => {
      setAppState({ loading: false, repos: res });
    });
  }, [props.query]);

  console.log(appState.repos);

  return (
    <div>
      <ProfileCard />
    </div>
  );
}

export default PeopleResults;
