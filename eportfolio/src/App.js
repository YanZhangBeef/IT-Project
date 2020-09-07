import React from 'react';
import logo from './logo.svg';
import {Switch, Route, useHistory} from 'react-router-dom';
import './App.css';

import Navbar from './Navbar';
import ContentPage from './ContentPage';
import ProfilePage from './ProfilePage';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/content">
          <ContentPage />
        </Route>

        <Route path="/">
          <ProfilePage />
        </Route>
      </Switch>
      
    </React.Fragment>
  );
}

export default App;
