import React from 'react';

function NavBar() {
    return (
        <nav className="w-full py-4 bg-blue-800 shadow">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between">
          <nav>
            <ul className="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
              <li>
                <a className="hover:text-gray-200 hover:underline px-4" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-gray-200 hover:underline px-4" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="hover:text-gray-200 hover:underline px-4" href="#">
                  Pokemon
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center text-lg no-underline text-white pr-6">
            <a className="" href="#">
              <i className="fab fa-facebook" />
            </a>
            <a className="pl-6" href="#">
              <i className="fab fa-instagram" />
            </a>
            <a className="pl-6" href="#">
              <i className="fab fa-twitter" />
            </a>
            <a className="pl-6" href="#">
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </nav>
    )
}

export default NavBar;
