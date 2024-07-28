import { Link } from "react-router-dom";

export default function NoteItem({ note, onDelete }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex flex-col space-y-2">
      <p className="text-xl font-semibold text-gray-800">{note.title.toUpperCase()}</p>
      <p className="text-gray-600">{note.content.substring(0, 100)}...</p>
      <p className="text-xs text-gray-500">{new Date(note.timestamp).toLocaleString()}</p>
      <div className="flex space-x-4">
        <Link to="/edit" state={{ note }}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-300">
            View
          </button>
        </Link>
        <button
          onClick={() => onDelete(note.id)}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all duration-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
