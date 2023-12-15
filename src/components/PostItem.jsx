import React from "react";
import MyButton from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom";

const PostItem = (props) => {
    const navigate = useNavigate();

    const handleOpenClick = () => {
        navigate(`/posts/${props.post.id}`);
    };

    const handleDeleteClick = () => {
        props.remove(props.post);
    };

    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong>{props.post.id}. {props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                </div>
                <div className="post__btns">
                    <MyButton onClick={handleOpenClick}>
                        Open
                    </MyButton>
                    <MyButton onClick={handleDeleteClick}>
                        Delete
                    </MyButton>
                </div>
            </div>
        </div>
    )
}

export default PostItem;
