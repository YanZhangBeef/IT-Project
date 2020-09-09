import React from "react";
import logo from "./logo.svg";
import { Switch, Route, Router } from "react-router-dom";
import "./App.css";

import Navbar from "./Navbar";
import ContentPage from "./ContentPage";
import ProfilePage from "./ProfilePage";
import Login from "./components/pages/Login";

import { fakeProfile, fakeContent } from "./TestData";

function App() {
  return (
    <React.Fragment>
      <Navbar />

      <Switch>
        <Route exact path="/content">
          <ContentPage {...fakeContent} />
        </Route>

        <Route exact path="/">
          <ProfilePage {...fakeProfile} />
        </Route>
        <Route exact path="/login" component={Login} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
