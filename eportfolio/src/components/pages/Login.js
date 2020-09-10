import React, { useState, useEffect } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "./css/Login.css";
import { Redirect } from "react-router-dom";
firebase.initializeApp({
  apiKey: "AIzaSyB6-XzH_OqNcW5RMiD4iiZqSyQev22HIyw",
  authDomain: "eportfolio-5head.firebaseapp.com",
});

const Login = (props) => {
  const [state, setState] = useState({ authenticated: false });
  let uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setState({ authenticated: !!user });
    });
  }, [state.authenticated]);
  return (
    <div className="container">
      {state.authenticated ? (
        <Redirect to="/home" />
      ) : (
        <div className="login shadow">
          <div className="login-method">
            <div className="header">
              <h2>Log In</h2>
            </div>
            <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </div>
          <div className="icon"></div>
        </div>
      )}
    </div>
  );
};
export default Login;
