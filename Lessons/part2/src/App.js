import React, { useState, useEffect } from 'react';
import './App.css';
import Note from './components/Note';
import axios from 'axios';

const App= () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote]= useState(' ')
  const [showAll, setShowAll]= useState(true)

  useEffect(()=> {
    console.log('effect')
    axios.get('http://localhost:3001/notes')
    .then(response => {
      console.log('promise fulfilled')
      setNotes(response.data)
    })
  }, [])

  console.log('render', notes.length, 'notes')

  const addNote= (event) =>{
    event.preventDefault()
    const noteObject= {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const notesToShow = showAll ? notes : notes.filter(note=> note.important === true)

  return(
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={()=> setShowAll(!showAll)}>
          Show {showAll? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note=>
           <Note key= {note.id} note= {note}>
            </Note>
          )}
      </ul>
      <form onSubmit={addNote}>
          <input value= {newNote} onChange= {handleNoteChange} placeholder= 'A New note' />
          <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default App;
