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

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <small>Last updated: {new Date(note.updatedAt).toLocaleString(undefined, { dateStyle: 'short', timeStyle: 'short' })}</small>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App