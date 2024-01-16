import React, { useState } from "react";
import Modal from "./Modal";
import "./Modal.css";

const ModelTest = () => {
  const [showModel, setShowModel] = useState(false);
  function handleModal() {
    setShowModel((prevValue) => !prevValue);
  }
  function onClose() {
    setShowModel(false);
  }
  return (
    <div>
      <button onClick={handleModal}> OPEN MODAL</button>
      {showModel && (
        <Modal onClose={onClose} content={<div>Customized Body</div>} />
      )}
    </div>
  );
};

export default ModelTest;
