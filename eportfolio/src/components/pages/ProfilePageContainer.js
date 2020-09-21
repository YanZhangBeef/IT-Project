import React, { useState, useEffect } from "react";
import ProfilePage from "./ProfilePage";
import { useParams } from "react-router-dom";

import {
  fetchProfile,
  updateProfile,
  uploadProfilePicture,
} from "../../data/ProfileRepository";

export default function ProfilePageContainer(props) {
  const [profileData, setProfileData] = useState({ sections: [] });

  const { userId } = useParams();

  useEffect(() => {
    fetchProfile(userId).then((data) => setProfileData(data));
  }, [userId]);

  const handleUpload = (file) => {
    uploadProfilePicture(userId, file).then((data) => {
      setProfileData(Object.assign({}, profileData, data));
    });
  };

  return (
    <ProfilePage
      {...profileData}
      isEditable={true}
      handleUpload={handleUpload}
      updateProfile={(data) => {
        updateProfile(userId, data);
        setProfileData(Object.assign({}, profileData, data));
      }}
    />
  );
}
