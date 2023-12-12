import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css"
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "Title text 1", body: "Description"},
    {id: 2, title: "Title text 2", body: "Description"},
    {id: 3, title: "Title text 3", body: "Description"},
  ])

  return (
    <div className="App">
      <PostList posts={posts} title="firlst list"/>
      <PostList posts={posts} title="second list"/>
    </div>
  );
}

export default App;
