import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import styles from "./Login.module.css";
import { Redirect } from "react-router-dom";

const Login = (props) => {
  const [user, setUser] = useState(null);
  let uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };

  useEffect(() => {
    const unlisten = firebase.auth().onAuthStateChanged((loggedIn) => {
      loggedIn ? setUser(loggedIn) : setUser(null);
    });
    return () => {
      unlisten();
    };
  }, []);
  return (
    <div className={styles["login-container"]}>
      {user ? (
        <Redirect to={"/profile/" + user.uid} />
      ) : (
        <div className={`${styles["login"]} shadow`}>
          <div className={styles["login-method"]}>
            <div className={styles["login-header"]}>
              <h2>Log In</h2>
            </div>
            <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </div>
          <div className={styles["app-icon"]}></div>
        </div>
      )}
    </div>
  );
};
export default Login;
