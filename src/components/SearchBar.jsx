import React from 'react';

export default function SearchBar({ setSearchText }) {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md my-4 mx-2 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10">
      <input
        type="text"
        placeholder="Search notes..."
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
}
