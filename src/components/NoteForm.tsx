import React from 'react'
import CreatableReactSelect from 'react-select/creatable';
import { Link } from "react-router-dom"

const NoteForm = () => {
    return (
        <div>
            <form action="" className='grid grid-cols-2 gap-8'>
                <div>
                    <label htmlFor="title" className='text-gray-600 block mb-2'>Title</label>
                    <input type="text" name='title' className='w-full border border-gray-200 outline-none p-1.5 rounded-md' />
                </div>
                <div>
                    <label htmlFor="tags" className='text-gray-600 block mb-2'>Tags</label>
                    <CreatableReactSelect isMulti />
                </div>
                <div className="col-span-2">
                    <label htmlFor='desc' className='text-gray-600 block mb-2'>Description</label>
                    <textarea name="desc" id="" cols={30} rows={5} className="w-full border border-gray-200 outline-none p-1.5 rounded-md"></textarea>
                </div>
                <div className='space-x-3'>
                    <button className='text-white bg-indigo-500 p-1 px-3 rounded-md'>Save</button>
                    <Link to="..">
                        <button className='text-white bg-gray-400 p-1 px-3 rounded-md'>Cancel</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default NoteForm