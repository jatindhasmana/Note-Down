import { getNotes, saveNotes } from "../utils/localStorage";
import { useState } from "react";
import NoteItem from "./NoteItem";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";

export default function NoteList() {
  const [viewNote, setViewNote] = useState(getNotes());
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");

  const notesPerPage = 10;
  const filteredNotes = viewNote.filter(
    (note) =>
      note.title.toLowerCase().includes(searchText.toLowerCase()) ||
      note.content.toLowerCase().includes(searchText.toLowerCase())
  );
  const paginatedNotes = filteredNotes.slice(
    (currentPage - 1) * notesPerPage,
    currentPage * notesPerPage
  );
  const handleDelete = (noteId) => {
    const updatedNotes = viewNote.filter((note) => note.id !== noteId);
    setViewNote(updatedNotes);
    saveNotes(updatedNotes);
  };

  return (
    <div className="p-4 min-h-screen">
      {currentPage === 1 && <SearchBar setSearchText={setSearchText} />}
      {filteredNotes.length > 0 ? (
        <>
          {paginatedNotes
            .slice()
            .reverse()
            .map((note) => (
              <NoteItem key={note.id} note={note} onDelete={handleDelete} />
            ))}
          <Pagination
            totalNotes={filteredNotes.length}
            notesPerPage={notesPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      ) : (
        <p className="text-center text-white mt-8 text-xl">Sorry!! No Data Available</p>
      )}
    </div>
  );
}
