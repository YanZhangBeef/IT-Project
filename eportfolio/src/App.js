import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navigation/Navbar";
import ContentPageContainer from "./components/pages/ContentPageContainer";
import CreateContentPageContainer from "./components/pages/CreateContentPageContainer";
import ProfilePageContainer from "./components/pages/ProfilePageContainer";
import SearchPage from "./components/pages/SearchPage";
import ContentPage from "./components/pages/ContentPage";
import ProfilePage from "./components/pages/ProfilePage";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import { Provider } from "react-redux";
import "./data/firebase";

import { fakeProfile, fakeContent } from "./TestData";
import Chat from "./components/pages/Chat";

const test = () => {
  console.log("works");
};

function App() {
  /* hook for search functionalities */
  const [query, setQuery] = useState([]);

  const setData = async (val) => {
    console.log(val);
    if (val) {
      setQuery(val);
    }
  };
  useEffect(() => {
    console.log("Effect does this:" + query);
  });

  return (
    <React.Fragment>
      <Navbar func={setData} />

      <Switch>
        <Route path="/newContent/:userId/:sectionId">
          <CreateContentPageContainer />
        </Route>
        <Route path="/editContent/:contentId">
          <ContentPageContainer isEditing={true} />
        </Route>
        <Route path="/content/:contentId">
          <ContentPageContainer />
        </Route>
        <Route path="/profile/:userId">
          <ProfilePageContainer />
        </Route>
        <Route exact path="/content">
          <ContentPage {...fakeContent} />
        </Route>

        <Route exact path="/">
          <ProfilePage {...fakeProfile} />
        </Route>
        <Route exact path="/chat" component={Chat} />
        <Route path="/search">
          <SearchPage data={query} />
        </Route>

        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
