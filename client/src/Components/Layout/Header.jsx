import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Header = () => {
  const [visible, setVisible] = useState(false);

//   handle mobile menu toggle
  const handleClick = () => {
    if (visible) {
      setVisible(false);
    } else setVisible(true);
  };

  return (
    <>
      <nav className="bg-gray-50 shadow-md w-full">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex text-2xl font-bold content-center">
              <p className="ps-2">Color Clash</p>
            </Link>

            <ul className="hidden md:flex space-x-6">
              <li>
                <Link to="/" className="text-gray-700 hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/rules" className="text-gray-700 hover:text-blue-600">
                  Rules
                </Link>
              </li>

              <li>
                <Link
                  to="/history"
                  className="text-gray-700 hover:text-blue-600"
                >
                  History
                </Link>
              </li>
            </ul>

            <button
              id="menu-btn"
              className="md:hidden text-gray-700"
              onClick={handleClick}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {visible && (
            <>
              <div id="mobile-menu" className="md:hidden bg-gray-50">
                <ul className="flex flex-col space-y-4 py-4 text-center">
                  <li>
                    <Link
                      to="/"
                      className="block text-gray-700 hover:text-blue-600"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/create-event"
                      className="block text-gray-700 hover:text-blue-600"
                    >
                      Rules
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/browse-events"
                      className="block text-gray-700 hover:text-blue-600"
                    >
                      History
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
};
