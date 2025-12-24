import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BlogList from './components/BlogList';
import BlogDetails from './components/BlogDetails';
import AddBlog from './components/AddBlog';

function App() {
  const [blogs, setBlogs] = useState([
    { id: 1, title: 'First Blog', content: 'This is first blog' },
    { id: 2, title: 'Second Blog', content: 'This is second blog' }
  ]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogList blogs={blogs} setBlogs={setBlogs} />} />
        <Route path="/blog/:id" element={<BlogDetails blogs={blogs} />} />
        <Route path="/add" element={<AddBlog blogs={blogs} setBlogs={setBlogs} />} />
      </Routes>
    </Router>
  );
}

export default App;
