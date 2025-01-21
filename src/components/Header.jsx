import React from "react";
import { CiShoppingCart, CiSearch, CiUser } from "react-icons/ci";

function Header() {
  return (
    <div>
      <header className="flex justify-between h-16 items-center px-10 bg-stone-300">
        <div className="flex gap-3 hover: cursor-pointer w-1/4">
          <img className="w-7" src="/src/images/icons/sofa-svgrepo-com.svg" />
          <p className="logo text-xl">FURNITURE STORE.</p>
        </div>
        <nav>
          <ul className="flex gap-8">
            <li
              className="hover: cursor-pointer hover:bg-stone-400 hover:rounded-lg hover: p-2"
              href=""
            >
              Home
            </li>
            <li
              className="hover: cursor-pointer hover:bg-stone-400 hover:rounded-lg hover: p-2"
              href=""
            >
              Shop
            </li>
            <li
              className="hover: cursor-pointer hover:bg-stone-400 hover:rounded-lg hover: p-2"
              href=""
            >
              About Us
            </li>
            <li
              className="hover: cursor-pointer hover:bg-stone-400 hover:rounded-lg hover: p-2"
              href=""
            >
              Contact Us
            </li>
          </ul>
        </nav>
        <div className="w-1/4	flex text-2xl gap-2 justify-end">
          <i className="hover: cursor-pointer">
            <CiShoppingCart />
          </i>
          <i className="hover: cursor-pointer">
            <CiSearch />
          </i>
          <i className="hover: cursor-pointer">
            <CiUser />
          </i>
        </div>
      </header>
    </div>
  );
}

export default Header;
