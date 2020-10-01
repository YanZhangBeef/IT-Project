import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import styles from "./Login.module.css";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../data/Auth";

const Login = (props) => {
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

  const { currentUser } = useContext(AuthContext);

  return (
    <div className={styles.background}>
      <div className={styles["login-container"]}>
        <div className={`${styles["login"]} shadow`}>
          <div className={styles["login-method"]}>
            <div className={styles["login-header"]}>
              {currentUser ? <h2> Login Success</h2> : <h2>Log In</h2>}
              {currentUser ? (
                <p className="my-5">
                  Welcome {currentUser.displayName}! You're all set to get
                  started.
                </p>
              ) : (
                <StyledFirebaseAuth
                  uiConfig={uiConfig}
                  firebaseAuth={firebase.auth()}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
