import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 drop-shadow-lg text-center">
        NOTE Kiya Jaye :)
      </h1>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <Link to="/add">
          <button className="bg-red-500 text-white font-serif w-48 h-12 md:w-56 md:h-14 rounded-md font-bold cursor-pointer hover:bg-white hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
         CREATE NEW NOTE
          </button>
        </Link>
        <Link to="/read">
          <button className="bg-red-500 text-white font-serif w-48 h-12 md:w-56 md:h-14 rounded-md font-bold cursor-pointer hover:bg-white hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
            VIEW NOTES
          </button>
        </Link>
      </div>
    </div>
  );
}
