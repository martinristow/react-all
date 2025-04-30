"use client"
import React, {useState} from 'react'

const NotesForm = () => {
    const [note, setNote] = useState('')
    const [notes, setNotes] = useState<string[]>([])

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (note.trim() !== '') {
            setNotes([...notes, note])
            setNote('')
        }
    }

    return (
        <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Notes App</h2>
            <p data-testid="desc" className="mb-4 text-gray-700">Add new notes in the list</p>

            <div className="mb-4">
                <div className="mb-3">
                    <input
                        type="text"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Enter a note"
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <button
                    onClick={handleSubmit}
                    disabled={note === ""}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded cursor-pointer"
                >
                    Add Note
                </button>
            </div>

            {notes.length > 0 && (
                <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-2">Your Notes:</h3>
                    <ul className="list-disc pl-5" data-testid="noteslist">
                        {notes.map((item, index) => (
                            <li key={index} className="mb-1">{item}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default NotesForm