import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Navbar";
import ContentPageContainer from "./ContentPageContainer";
import CreateContentPageContainer from "./CreateContentPageContainer";
import ProfilePageContainer from "./ProfilePageContainer";
import ContentPage from "./ContentPage";
import ProfilePage from "./ProfilePage";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";

import './data/firebase';

import { fakeProfile, fakeContent } from "./TestData";


function App() {
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
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
