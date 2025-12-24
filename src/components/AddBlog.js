import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddBlog({ blogs, setBlogs }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    setBlogs([...blogs, { id: Date.now(), title, content }]);
    navigate('/');
  };

  return (
    <div className="container">
      <h3>Add Blog</h3>
      <form onSubmit={submit}>
        <input required placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
        <textarea required placeholder="Content" value={content} onChange={e=>setContent(e.target.value)} />
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddBlog;
