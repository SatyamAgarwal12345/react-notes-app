import React, { useState } from "react";

const AddNote = ({ handleaddNote }) => {
  const [noteText, setnoteText] = useState("");

  const handleText = (event) => {
    setnoteText(event.target.value);
  };

  const handleSave = () => {
    if (noteText.trim().length > 0) {
      handleaddNote(noteText);
      setnoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        col="10"
        placeholder="Add your notes"
        onChange={handleText}
        value={noteText}
      ></textarea>
      <div className="note-footer">
        <button className="save" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
