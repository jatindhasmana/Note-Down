export default function SearchBar({ setSearchText }) {
    return (
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search notes..."
          className="w-full text-black p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
    );
  }
  