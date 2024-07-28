import { Link } from 'react-router-dom';

export default function NoteItem({ note, onDelete }) {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md my-2 mx-2 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10">
      <div className="flex flex-col justify-between">
        <div className="flex-1 pr-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{note.title}</h2>
          <p className="text-gray-600">{note.content.substring(0, 100)}...</p>
          <p className="text-gray-400 text-xs">{new Date(note.timestamp).toLocaleString()}</p>
        </div>
        <div className="flex-shrink-0 space-x-2">
          <Link to="/edit" state={{note}}>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md">View</button>
          </Link>
          <button
            onClick={() => onDelete(note.id)}
            className="px-4 py-2 bg-red-500 text-white rounded-md mt-4"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
