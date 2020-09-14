import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Navbar";
import ContentPageContainer from "./ContentPageContainer";
import ProfilePageContainer from "./ProfilePageContainer";
import ContentPage from "./ContentPage";
import ProfilePage from "./ProfilePage";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";

import firebase from "firebase";

import { fakeProfile, fakeContent } from "./TestData";

firebase.initializeApp({
  apiKey: "AIzaSyB6-XzH_OqNcW5RMiD4iiZqSyQev22HIyw",
  authDomain: "eportfolio-5head.firebaseapp.com",
  databaseURL: "https://eportfolio-5head.firebaseio.com",
  projectId: "eportfolio-5head",
  storageBucket: "eportfolio-5head.appspot.com",
  messagingSenderId: "1092112688172",
  appId: "1:1092112688172:web:07921eaf8d11dff13edd89"
});

// make sure we use the emulator db if on localhost
var db = firebase.firestore();
if (window.location.hostname === "localhost") {
  db.settings({
    host: "localhost:8080",
    ssl: false
  });
}

function App() {
  return (
    <React.Fragment>
      <Navbar />

      <Switch>
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
