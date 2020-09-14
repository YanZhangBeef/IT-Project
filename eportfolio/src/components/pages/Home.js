import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory } from "react-router-dom";

const Home = (props) => {
  const history = useHistory();
  const signOut = () => {
    firebase.auth().signOut();
    history.push("/");
  };
  return <button onClick={signOut}>Sign Out</button>;
};

export default Home;
