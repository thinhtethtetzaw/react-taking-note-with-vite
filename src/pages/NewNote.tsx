import React from 'react'
import NoteForm from "./../components/NoteForm"

const NewNote = () => {
    return (
        <div className='p-10 px-20'>
            <h1 className='text-3xl mb-6'>NewNote</h1>
            <NoteForm />
        </div>

    )
}

export default NewNote