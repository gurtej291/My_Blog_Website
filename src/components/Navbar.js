import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h2>My Blog</h2>
      <Link to="/">Home</Link>
      <Link to="/add">Add Blog</Link>
    </nav>
  );
}

export default Navbar;
