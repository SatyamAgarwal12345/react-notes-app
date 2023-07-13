import React from "react";
import { MdDeleteForever } from "react-icons/md";

const Note = ({ date, id, text, handledeteleNote }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => handledeteleNote(id)}
          className="delete-icon"
        />
      </div>
    </div>
  );
};

export default Note;
