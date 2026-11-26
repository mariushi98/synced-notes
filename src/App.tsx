import { useState } from 'react'
import type { Note } from './types'

const exampleNotes: Note[] = [
  {
    id: '1',
    title: 'First Note',
    content: 'This is the content of the first note.',
    updatedAt: Date.now(),
  },
  {
    id: '2',
    title: 'Second Note',
    content: 'This is the content of the second note.',
    updatedAt: Date.now(),
  },
]

function App() {
  const [notes, setNotes] = useState<Note[]>(exampleNotes)
  const [activeId, setActiveId] = useState<string | null>(null)
  const activeNote = notes.find((note) => note.id === activeId)

  function addNote() {
    const newNote: Note = {
      id: crypto.randomUUID(),
      title: 'New Note',
      content: '',
      updatedAt: Date.now(),
    }
    setNotes([newNote, ...notes])
    }

    function deleteNote(id: string) {
      setNotes(notes.filter((note) => note.id !== id))
    }
  
    if (activeNote) {
      return (
        <div>
          <button onClick={() => setActiveId(null)}>← Back</button>
          <h1>{activeNote.title}</h1>
          <p>{activeNote.content}</p>
          <button onClick={() => { deleteNote(activeNote.id); setActiveId(null) }}>Delete</button>
        </div>
      )
    }

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={addNote}>+ New note</button>
      <ul>
        {notes.map((note) => (
          <li key={note.id} onClick={() => setActiveId(note.id)}>
            <h2>{note.title}</h2>
            <small>{new Date(note.updatedAt).toLocaleString(undefined, { dateStyle: 'short', timeStyle: 'short' })}</small>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App