import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";
const NotesList = ({ notes, handleaddNote, handledeteleNote }) => {
  return (
    <div className="notes-list">
     
      {notes.map((note) => (
        <Note
          text={note.text}
          id={note.id}
          date={note.date}
          handledeteleNote={handledeteleNote}
        />
      ))}
      <AddNote handleaddNote={handleaddNote} />
    </div>
  );
};
export default NotesList;
