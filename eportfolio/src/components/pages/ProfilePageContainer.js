import React, { useState, useEffect } from "react";
import ProfilePage from "./ProfilePage";
import { useHistory, useParams } from "react-router-dom";

import {
  createContent,
  fetchProfile,
  updateProfile,
  uploadProfilePicture,
  uploadSquareThumbnail,
} from "../../data/ProfileRepository";

export default function ProfilePageContainer(props) {
  const [profileData, setProfileData] = useState({ sections: [] });

  const { userId } = useParams();
  const history = useHistory();

  useEffect(() => {
    console.log("fetching " + userId);
    fetchProfile(userId).then((data) => setProfileData(data));
  }, [userId]);

  const handleUpload = (file) => {
    uploadProfilePicture(userId, file).then((data) => {
      setProfileData(Object.assign({}, profileData, data));
    });
  };

  const handleSquareThumbnailUpload = (contentId, file) => {
    uploadSquareThumbnail(contentId, file).then(() => {
      fetchProfile(userId).then((data) => setProfileData(data));
    });
  };

  const createNewContent = (sectionId) => {
    createContent(userId, sectionId, {
      title: "Untitled project",
    }).then((contentId) => history.push("/editContent/" + contentId));
  };

  return (
    <ProfilePage
      {...profileData}
      isEditable={true}
      createNewContent={createNewContent}
      handleUpload={handleUpload}
      updateProfile={(data) => {
        updateProfile(userId, data);
        setProfileData(Object.assign({}, profileData, data));
      }}
      handleSquareThumbnailUpload={handleSquareThumbnailUpload}
    />
  );
}
