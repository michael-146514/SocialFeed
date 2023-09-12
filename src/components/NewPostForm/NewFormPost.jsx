import React, { useState } from "react";

const NewPostForm = ({ onNewPost }) => {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      post,
    };
    console.log(formData);
    onNewPost(formData);
  };

  return (
    <form className="new-form" onSubmit={handleSubmit}>
      <div>
        <div>
          <h3>Name</h3>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <h3>Post</h3>
          <input value={post} onChange={(e) => setPost(e.target.value)} />
        </div>
        <button type="sumbit">Create</button>
      </div>
    </form>
  );
};

export default NewPostForm;
