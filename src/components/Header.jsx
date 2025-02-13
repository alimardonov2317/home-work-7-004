import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" text-black font-bold p-4">
      <nav className="flex justify-between items-center mx-auto px-16">
        <div>
          <h3 className="text-3xl">Books</h3>
        </div>
        <ul className="flex gap-5">
          <li className="text-[18px]">
            <Link to="/" className="hover:text-emerald-400">Home</Link>
          </li>
          <li className="text-[18px]">
            <Link to="/about" className="hover:text-emerald-400">About</Link>
          </li>
          <li className="text-[18px]">
            <Link to="/contact" className="hover:text-emerald-400">Contact</Link>
          </li>
        </ul>
        <div>
          <button className="py-2.5 px-8 bg-emerald-400 text-white rounded-[5px]">Login</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;


