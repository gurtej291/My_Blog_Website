import React from 'react';
import { Link } from 'react-router-dom';

function BlogList({ blogs, setBlogs }) {
  return (
    <div className="container">
      <h3>All Blogs</h3>
      {blogs.map(blog => (
        <div key={blog.id} className="card">
          <h4>{blog.title}</h4>
          <Link to={`/blog/${blog.id}`}>Read More</Link>
          <button onClick={() => setBlogs(blogs.filter(b => b.id !== blog.id))}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
