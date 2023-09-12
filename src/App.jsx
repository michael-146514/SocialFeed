import "./App.css";
import Header from "./components/Header/Header";
import PostList from "./components/PostList/PostList";
import NewPostForm from "./components/NewPostForm/NewFormPost";
import React, { useState, useEffect } from "react";

const initData = [
  {
    name: "Forrest Gump",
    post: "helloooo world, this is my post. Im bored and gayyyy lmao",
  },
  {
    name: "s Gump",
    post: "helloooo world, ths post. Im bored and gayyyy lmao",
  },
  {
    name: "a Gump",
    post: "helloooo worldsis my post. Im bored and gayyyy lmao",
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
