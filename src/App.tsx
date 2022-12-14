import { useMemo, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import NewNote from "./pages/NewNote"
import { v4 as uuidV4 } from 'uuid';
import { useLocalStorage } from './useLocalStorage';


export type Note = {
  id: string
} & NoteData

export type RawNote = {
  id: string
} & RawNoteData

export type RawNoteData = {
  title: string
  markdown: string
  tagIds: string[]
}

export type NoteData = {
  title: string
  markDown: string
  tags: Tag[]
}

export type Tag = {
  id: string
  label: string
}

function App() {

  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);

  const noteWithTags = useMemo(() => {
    return notes.map((note: any) => {
      return { ...note, tags: tags.filter((tag: any) => note.tagIds.includes(tag.id)) }
    })
  }, [notes, tags])

  function onCreateNote({ tags, ...data }: NoteData) {
    setNotes((prevNotes: any) => {
      return [...prevNotes,
      { ...data, id: uuidV4(), tagIds: tags.map(tag => tag.id) }]
    })
  }

  function addTag(tag: Tag) {
    setTags((prev: any) => [...prev, tag])
  }
  return (
    <Routes>
      <Route path='/' element={<h1 className='text-red-400'>Home</h1>} />
      <Route path='/new' element={<NewNote onSubmit={onCreateNote} onAddTag={addTag} availableTags={tags} />} />
      <Route path='/:id'>
        <Route index element={<h1>show</h1>} />
        <Route path='edit' element={<h1>edit</h1>} />
      </Route>
      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
