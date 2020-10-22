import React, { useState, useEffect } from "react";
import {
  fetchArtefacts,
  deleteArtefact,
  uploadArtefact,
} from "../../data/ArtefactRepository";
import ArtefactSection from "./ArtefactSection";

export default function ArtefactSectionContainer(props) {
  const [artefacts, setArtefacts] = useState([]);

  useEffect(() => {
    setArtefacts(props.artefactIds);
  }, [props.artefactIds]);

  const handleDeleteArtefact = (artefactId) => {
    setArtefacts(
      artefacts.filter((artefact) => artefact.artefactId !== artefactId)
    );
    deleteArtefact(artefactId);
  };

  const handleUploadArtefact = (file) => {
    console.log(file);
    uploadArtefact(props.contentId, file).then((newArtefact) =>
      setArtefacts([...artefacts, newArtefact])
    );
    console.log("upload successful");
  };

  return (
    <ArtefactSection
      artefacts={artefacts}
      handleDelete={handleDeleteArtefact}
      handleUpload={handleUploadArtefact}
      isEditable={props.isEditable}
    />
  );
}
