import React, { useState, useEffect, useContext } from "react";
import ProfilePage from "./ProfilePage";
import { useHistory, useParams } from "react-router-dom";
import { AuthContext } from "../../data/Auth";

import {
  createContent,
  fetchProfile,
  updateProfile,
  uploadProfilePicture,
  uploadSquareThumbnail,
} from "../../data/ProfileRepository";

export default function ProfilePageContainer(props) {
  const [profileData, setProfileData] = useState({ sections: [] });
  const { currentUser } = useContext(AuthContext);

  const { userId } = useParams();
  const history = useHistory();

  useEffect(() => {
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
      isEditable={currentUser?.uid === userId}
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
