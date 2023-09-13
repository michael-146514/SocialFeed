import "./App.css";
import Header from "./components/Header/Header";
import PostList from "./components/PostList/PostList";
import NewPostForm from "./components/NewPostForm/NewFormPost";
import React, { useState, useEffect } from "react";

const initData = [
  {
    name: "Danimal",
    post: "Byeee world, this is my post. I am Danimal",
  },
  {
    name: "Amy",
    post: "helloooo world, this is my post. I am Amy",
  },
  {
    name: "Mike",
    post: "Hello Im Michael! :)",
  },
];

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(initData);
  }, []);

  const handleNewPost = (newPost) => {
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
  };

  return (
    <div className="App">
      <Header />
      <NewPostForm onNewPost={handleNewPost} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
