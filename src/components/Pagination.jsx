export default function Pagination({ totalNotes, notesPerPage, currentPage, setCurrentPage }) {
    const totalPages = Math.ceil(totalNotes / notesPerPage);
  
    const handleClick = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    return (
      <div className="mt-6 flex justify-center space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`px-4 py-2 rounded-md ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } transition-all duration-300`}
            onClick={() => handleClick(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    );
  }
  