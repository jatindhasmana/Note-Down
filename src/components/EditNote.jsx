import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getNotes, saveNotes } from "../utils/localStorage";

export default function EditNote() {
  const location = useLocation();
  const navigate = useNavigate();
  const note = location.state?.note;

  if (!note) {
    return <p className="text-center text-3xl text-white mt-4">Note not found !!</p>;
  }

  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const [success, setSuccess] = useState(false);
  const [edit, setEdit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const notes = getNotes();
    // Update the note by id
    const updatedNotes = notes.map((n) =>
      n.id === note.id ? { ...n, title, content } : n
    );
    saveNotes(updatedNotes);
    setSuccess(true);
    setTimeout(() => {
      navigate("/read", { replace: true });
    }, 500);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setEdit(true);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      {edit ? (
        <>
          <form
            className="w-full max-w-lg bg-white shadow-md rounded-lg p-8 space-y-6"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
              Edit Note
            </h2>
            <input
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={title}
              name="title"
              placeholder="Title"
              type="text"
              required
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={content}
              name="content"
              placeholder="Content"
              required
              rows="10"
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Update
            </button>
            {success && (
              <p className="text-center text-green-500 mt-4">
                Note Updated Successfully!
              </p>
            )}
          </form>
        </>
      ) : (
        <>
          <form className="w-full max-w-lg bg-white shadow-md rounded-lg p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
              {note.title}
            </h2>
            <input
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={title}
              name="title"
              placeholder="Title"
              type="text"
            />
            <textarea
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={content}
              name="content"
              placeholder="Content"
              rows="10"
            ></textarea>
            <button
              onClick={handleUpdate}
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Click To Edit
            </button>
          </form>
        </>
      )}
    </div>
  );
}
