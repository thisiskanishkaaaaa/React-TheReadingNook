// components/Navbar.js
import React from "react";
import { IoBookSharp } from "react-icons/io5"; // Import the icon from react-icons
import { Link } from "react-router";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Render the icon here */}
        <IoBookSharp className="navbar-icon" />
        <h1>The Reading Nook</h1>
      </div>
      <div className="navbar-links">
        <Link to="/home">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/BookShelf">Bookshelf</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
