import React from "react";

const Navbar = () => {
  return (
    <>
      {/* Top Bar Nav */}
      <nav className="w-full py-4 bg-blue-800 shadow">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between">
          <nav>
            <ul className="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
              <li>
                <a
                  className="hover:text-gray-200 hover:underline px-4"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-200 hover:underline px-4"
                  href="/users"
                >
                  Users
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
