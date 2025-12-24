import React from 'react';
import { useParams } from 'react-router-dom';

function BlogDetails({ blogs }) {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === parseInt(id));

  if (!blog) return <h3>Blog not found</h3>;

  return (
    <div className="container">
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </div>
  );
}

export default BlogDetails;
