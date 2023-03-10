import { Link } from "react-router-dom";

function TopicNav() {
    return (
      <nav className="w-full py-4 border-t border-b bg-gray-100" x-data="{ open: false }">
        <div className="block sm:hidden">
          <Link
            to="/"
            className="block md:hidden text-base font-bold uppercase text-center flex justify-center items-center"
          >
            Topics <i className="fas ml-2" />
          </Link>
        </div>
        <div className="w-full flex-grow sm:flex sm:items-center sm:w-auto">
          <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
            <Link to="/" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Technology</Link>
            <Link to="/" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Automotive</Link>
            <Link to="/" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Finance</Link>
            <Link to="/" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Politics</Link>
            <Link to="/" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Culture</Link>
            <Link to="/" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Sports</Link>
          </div>
        </div>
      </nav>
    )
}

export default TopicNav;