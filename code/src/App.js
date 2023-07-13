import { useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import Search from "./components/Search";
function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "first notes",
      date: "10/09/1999",
    },
    {
      id: nanoid(),
      text: "second notes",
      date: "10/09/1999",
    },
    {
      id: nanoid(),
      text: "third notes",
      date: "10/09/1999",
    },
    {
      id: nanoid(),
      text: "fourth notes",
      date: "10/09/1999",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const [searchText, setsearchText] = useState("");

  const deteleNote = (id) => {
    const newNote = notes.filter((note) => note.id != id);
    setNotes(newNote);
  };

  return (
    <div className="container">
      <Search handlesearchText={setsearchText}/>
      <NotesList
        notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))}
        handleaddNote={addNote}
        handledeteleNote={deteleNote}
      />
    </div>
  );
}

export default App;
