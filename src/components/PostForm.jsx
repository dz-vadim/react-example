import React from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import { useState } from "react";
const PostForm = ({create}) => {
  const [post, setPost] = useState({title: "", body: ""})

  const addNewPost = (e) => {
    e.preventDefault();
    // setPosts([...posts, {...post, id: Date.now()}])    
    const newPost = {
        ...post, id: Date.now()
    }
    create(newPost)
    setPost({title: "", body: ""})
  };

    return (
        <form>
            <MyInput
                type="text"
                placeholder="Post name"
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
            />
            <MyInput
                // ref = {bodyInputRef} 
                type="text"
                placeholder="Desription"
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
            />
            <MyButton onClick={addNewPost}>Create post</MyButton>
        </form>
    );
};
export default PostForm;