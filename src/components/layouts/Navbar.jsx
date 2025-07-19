import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="navLink">
        Home
      </Link>
      <Link to="/show-book" className="navLink">
        Show Book List
      </Link>
      <Link to="/add-book" className="navLink">
        Add Book
      </Link>
    </nav>
  );
};

export default Navbar;
