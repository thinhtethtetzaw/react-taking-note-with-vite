import React, { FormEvent, useRef, useState } from 'react'
import CreatableReactSelect from 'react-select/creatable';
import { Link } from "react-router-dom"
import { NoteData, Tag } from '../App';
import { v4 as uuidV4 } from "uuid"


type NoteFormProps = {
    onSubmit: (data: NoteData) => void;
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
}

const NoteForm = ({ onSubmit, onAddTag, availableTags }: NoteFormProps) => {

    const titleRef = useRef<HTMLInputElement>(null);
    const markDownRef = useRef<HTMLTextAreaElement>(null);
    const [selectedTags, setSelectedTags] = useState<Tag[]>([])

    // function 
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        onSubmit({
            title: titleRef.current!.value,
            markDown: markDownRef.current!.value,
            tags: selectedTags,
        })
    }

    return (
        <div>
            <form action="" className='grid grid-cols-2 gap-8' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title" className='text-gray-600 block mb-2'>Title</label>
                    <input type="text" name='title' ref={titleRef} className='w-full border border-gray-200 outline-none p-1.5 rounded-md' />
                </div>
                <div>
                    <label className='text-gray-600 block mb-2'>Tags</label>
                    <CreatableReactSelect
                        onCreateOption={label => {
                            const newTag = { id: uuidV4(), label }
                            onAddTag(newTag)
                            setSelectedTags(prev => [...prev, newTag])
                        }}
                        value={selectedTags.map(tag => {
                            return { label: tag.label, value: tag.id }
                        })}
                        options={availableTags.map(tag => {
                            return { label: tag.label, value: tag.id }
                        })}
                        onChange={tags => {
                            setSelectedTags(tags.map(tag => {
                                return { label: tag.label, id: tag.value }
                            }))
                        }}


                        isMulti />
                </div>
                <div className="col-span-2">
                    <label htmlFor='desc' className='text-gray-600 block mb-2'>Description</label>
                    <textarea name="desc" ref={markDownRef} cols={30} rows={5} className="w-full border border-gray-200 outline-none p-1.5 rounded-md"></textarea>
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