import { useState, useEffect } from 'react';
import NotesList from "./components/NotesList";
import { nanoid } from 'nanoid';
import  SearchArea  from './components/SearchArea'
const App = () => {

  let newNotes = [];

  const [notes, setNotes] = useState([
   
]);

const [searchText, setSearchText] = useState('');

useEffect(() => {
  const localNotes = JSON.parse(localStorage.getItem('notes-react-app-data'));
  if (localNotes) {
    setNotes(localNotes);
  }
  }, []);

useEffect(() => {
localStorage.setItem('notes-react-app-data', JSON.stringify(notes));
}, [notes]);


  
const addNote = (text) => {
   const date = new Date();

   const options = {
    weekday: "long",
    year: "numeric",
    month:"long",
    day:"numeric"
   }
   
   const newNote = {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString("en-US", options),
    time: date.toLocaleTimeString() 
   }
   newNotes = [...notes, newNote];
   setNotes(newNotes);
}

const deleteNote = (id) => {
const newNotes = notes.filter(note => note.id !== id);
setNotes(newNotes);
}
  return(
    <div className="container">
      <SearchArea handleSearchNote={setSearchText} />
      <NotesList 
      notes={notes.filter(note => note.text.toLowerCase().includes(searchText.toLowerCase()))} 
      handleAddNote={addNote}
      handleDeleteNote={deleteNote}/>
    </div>
  )
}

export default App;