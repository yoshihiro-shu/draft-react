import { Link } from "react-router-dom";

function Pagination() {
    return (
      <div className="flex items-center py-8">
        <Link to="/" className="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center">1</Link>
        <Link to="/" className="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center">2</Link>
        <Link to="/" className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">Next <i className="fas fa-arrow-right ml-2" /></Link>
      </div>
    )
}

export default Pagination;