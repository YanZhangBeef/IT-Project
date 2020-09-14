import React from "react";

import "./ProfileCard.css";
export default function ProfileCard(props) {
  return (
    <div className="section-card shadow p-4 mt-5">
      <div className="profile my-2 mb-4">
        <div className="profile-image mr-5"></div>
        <div className="profile-content">
          <h1 className="profile-name">{`${props.firstName} ${props.lastName}`}</h1>
          <span className="profile-tagline">{props.tagline}</span>
        </div>

        <div className="profile-message ml-auto">
          <button className="btn btn-primary">Message</button>
        </div>
      </div>
      <hr />
      <p>{props.about}</p>
    </div>
  );
}
