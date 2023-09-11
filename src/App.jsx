import "./App.css";
import Header from "./components/Header/Header";
import PostList from "./components/PostList/PostList";
import NewPostForm from "./components/NewPostForm/NewFormPost";

function App() {
  return (
    <div className="App">
      <Header />
      <NewPostForm />
      <PostList />
    </div>
  );
}

export default App;
