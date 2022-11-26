import React from 'react'
import NoteForm from "./../components/NoteForm"
import { NoteData, Tag } from "./../App"


type NewNoteProps = {
    onSubmit: (data: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
}

const NewNote = ({ onSubmit, onAddTag, availableTags }: NewNoteProps) => {
    return (
        <div className='p-10 px-20'>
            <h1 className='text-3xl mb-6'>NewNote</h1>
            <NoteForm onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags} />
        </div>

    )
}

export default NewNote