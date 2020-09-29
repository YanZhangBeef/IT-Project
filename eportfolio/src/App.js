import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import AuthRoute from "./data/AuthRoute";

import Navbar from "./components/navigation/Navbar";
import ContentPageContainer from "./components/pages/ContentPageContainer";
import CreateContentPageContainer from "./components/pages/CreateContentPageContainer";
import ProfilePageContainer from "./components/pages/ProfilePageContainer";
import SearchPage from "./components/pages/SearchPage";
import MoreSearchResults from "./components/pages/MoreSearchResults";
import ContentPage from "./components/pages/ContentPage";
import ProfilePage from "./components/pages/ProfilePage";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import { Provider } from "react-redux";
import "./data/firebase";
import { auth } from "./data/firebase";

import { fakeProfile, fakeContent } from "./TestData";
import Chat from "./components/pages/Chat";

const test = () => {
  console.log("works");
};

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const unlisten = auth().onAuthStateChanged((user) => {
      user ? setAuthenticated(true) : setAuthenticated(false);
    });
    return () => {
      unlisten();
    };
  }, []);
  return (
    <React.Fragment>
      <Navbar />
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
        <AuthRoute
          exact
          path="/chat"
          authenticated={authenticated}
          component={Chat}
        />

        <Route exact path="/search">
          <SearchPage />
        </Route>

        <Route exact path="/results">
          <MoreSearchResults />
        </Route>

        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
