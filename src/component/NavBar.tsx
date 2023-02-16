import { Link } from "react-router-dom";

function NavBar() {
    return (
      <>
        <nav className="w-full py-4 bg-blue-800 shadow">
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between">
            <nav>
              <ul className="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
                <li>
                  <Link className="hover:text-gray-200 hover:underline px-4" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-200 hover:underline px-4" to="/">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-200 hover:underline px-4" to="New">
                    Latest
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center text-lg no-underline text-white pr-6">
              <Link className="" to="/">
                <i className="fab fa-facebook" />
              </Link>
              <Link className="pl-6" to="/">
                <i className="fab fa-instagram" />
              </Link>
              <Link className="pl-6" to="/">
                <i className="fab fa-twitter" />
              </Link>
              <Link className="pl-6" to="/">
                <i className="fab fa-linkedin" />
              </Link>
            </div>
          </div>
        </nav>
      </>
    )
}

export default NavBar;
