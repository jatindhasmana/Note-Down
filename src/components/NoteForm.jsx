import { useState } from "react";
import { getNotes, saveNotes } from "../utils/localStorage.jsx";
import { useNavigate } from "react-router-dom";

export default function NoteForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const notes = getNotes();
    const Note = { id: Date.now(), title, content, timestamp: Date.now() };
    const newNote = [...notes, Note];
    saveNotes(newNote);
    setSuccess(true);
    setTimeout(()=>{
      navigate("/", { replace: true });
    },500)
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <form className="bg-white shadow-md rounded-lg p-8 max-w-md w-full mx-4" onSubmit={handleSubmit} id="addForm">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create a New Note</h2>
        <div className="mb-4">
          <input
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            name="title"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={content}
            name="content"
            placeholder="Content"
            onChange={(e) => setContent(e.target.value)}
            rows="6"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-all duration-300"
        >
          CREATE
        </button>
        {success && (<p className="text-center text-green-500 mt-4" >Note Created Successfully!</p>)}
      </form>
    </div>
  );
}
