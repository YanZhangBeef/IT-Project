import React, { useState, useEffect, useContext } from "react";
import ContentPage from "./ContentPage";
import EditContentPage from "./EditContentPage";
import { useHistory, useParams } from "react-router-dom";
import {
  deleteContent,
  fetchContent,
  updateContent,
  uploadThumbnail,
} from "../../data/ProfileRepository";
import { AuthContext } from "../../data/Auth";

export default function ContentPageContainer(props) {
  const [contentData, setContentData] = useState({ artefacts: [] });
  const { currentUser } = useContext(AuthContext);

  const { contentId } = useParams();
  const history = useHistory();

  const handleSave = (data) => {
    updateContent(contentId, data).then(() => {
      setContentData(Object.assign({}, contentData, data));
      history.push(`/content/${contentId}`);
    });
  };

  const handleDelete = () => {
    deleteContent(contentId).then((userId) =>
      history.push(`/profile/${userId}`)
    );
  };

  const handleCancel = () => {
    history.push(`/content/${contentId}`);
  };

  const handleUpload = (file) => {
    uploadThumbnail(contentId, file).then((data) => {
      setContentData(Object.assign({}, contentData, data));
    });
  };

  useEffect(() => {
    fetchContent(contentId).then((data) => setContentData(data));
  }, [contentId]);

  return props.isEditing ? (
    <EditContentPage
      {...contentData}
      handleSave={handleSave}
      handleDelete={handleDelete}
      handleCancel={handleCancel}
      handleUpload={handleUpload}
    />
  ) : (
    <ContentPage
      isEditable={currentUser?.uid === contentData?.userId}
      {...contentData}
      handleUpload={handleUpload}
    />
  );
}
