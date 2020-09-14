import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";


import Navbar from './Navbar';
import ContentPage from './ContentPage';
import ProfilePage from './ProfilePage';
import SearchPage from './components/pages/SearchPage/SearchPage';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import {fakeProfile, fakeContent} from './TestData';
import Chat from "./components/Chat/chat";



function App() {
  return (
    <React.Fragment>
      <Navbar />

      <Switch>
        <Route exact path="/content">
          <ContentPage {...fakeContent} />
        </Route>

        <Route exact path="/">

          <ProfilePage {...fakeProfile}/>
        </Route>
        <Route exact path="/chat" component={Chat} />
        <Route path ="/search">
          <SearchPage />
        </Route>

          
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />

      </Switch>
    </React.Fragment>
  );
}

export default App;
