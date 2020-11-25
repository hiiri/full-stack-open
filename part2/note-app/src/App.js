import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'

const App = () => {
  const [notes, setNotes] = useState(["test"])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log(response.data, 'res')
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])
  console.log('render', notes.length, 'notes')
  console.log(notes)
  return (
    <>
    <ul>
      {notes.map((note) => (
        <Note note={note.content} />
      ))
    }
    </ul>
    </>
  )
}

export default App
