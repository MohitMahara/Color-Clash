import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { UseAuth } from "../../contexts/authContext";

export const Header = () => {
  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const {userInfo, setUserInfo} = UseAuth();
  const navigate = useNavigate();

//   handle mobile menu toggle
  const handleClick = () => {
    if (visible) {
      setVisible(false);
    } else setVisible(true);
  };


  // handles the user profile dropdown
  
  const handleIsOpen = () => {
     if(isOpen) setIsOpen(false);
     else setIsOpen(true);
  }

  const handleLogOut = () => {
    setUserInfo({
      user: null,
      token: null,
    });

    localStorage.removeItem("colorclash");
    navigate("/login");
  }

  return (
    <>
      <nav className="bg-gray-50 shadow-md w-full">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex text-2xl font-bold content-center">
              <p className="ps-2">Color Clash</p>
            </Link>

            <ul className="hidden md:flex space-x-6 justify-center items-center">
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

               <li>
                {userInfo?.user ? (
                  <div className="relative flex items-center w-[40px] h-[40px] justify-center rounded-full bg-gray-200 p-2">
                     <p className="text-lg text-gray-800 cursor-pointer" onClick={handleIsOpen}>{userInfo?.user?.name.charAt(0)} </p>
                     <div className={` ${isOpen ?  "block" : "hidden"} absolute left-0  top-12 bg-black text-white rounded-lg p-3 cursor-pointer`}>
                       <button className="text-md" onClick={handleLogOut}>LogOut</button>
                     </div>
                  </div>
                ) : (
                <Link to="/register" className="text-gray-700 hover:text-blue-600">
                  SignUp
                </Link>

                )}

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
                    <Link to="/rules"
                      className="block text-gray-700 hover:text-blue-600"
                    >
                      Rules
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/history"
                      className="block text-gray-700 hover:text-blue-600"
                    >
                      History
                    </Link>
                  </li>

                 <li className="flex justify-center">
                   {userInfo?.user ? (
                     <div className="relative flex items-center w-[40px] h-[40px] justify-center rounded-full bg-gray-200 p-2">
                         <p className="text-lg text-gray-800 cursor-pointer" onClick={handleIsOpen}>{userInfo?.user?.name.charAt(0)} </p>
                         <div className={` ${isOpen ?  "block" : "hidden"} absolute left-0  top-12 bg-black text-white rounded-lg p-3 cursor-pointer`}>
                            <button className="text-md" onClick={handleLogOut}>LogOut</button>
                         </div>
                      </div>
                       ) : (
                        <Link to="/register" className="text-gray-700 hover:text-blue-600">
                          SignUp
                        </Link>
                    )}
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
