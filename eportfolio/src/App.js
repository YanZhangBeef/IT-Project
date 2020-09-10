import React from 'react';
import logo from './logo.svg';
import {Switch, Route, useHistory} from 'react-router-dom';
import './App.css';

import Navbar from './Navbar';
import ContentPage from './ContentPage';
import ProfilePage from './ProfilePage';
import SearchPage from './SearchPage/SearchPage';
import {fakeProfile, fakeContent} from './TestData';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/content">
          <ContentPage {...fakeContent}/>
        </Route>

        <Route exact path="/">
          <ProfilePage {...fakeProfile}/>
        </Route>
        <Route path ="/search">
          <SearchPage />
        </Route>
      </Switch>
      
    </React.Fragment>
  );
}

export default App;
