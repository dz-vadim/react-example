import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../../../API/PostService';
import { useFetching } from '../../../hooks/useFetching';
import Loader from '../Loader/Loader';

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        console.log(params.id); //TODO: change params.id to local variable id
        const response = await PostService.getById(params.id);
        setPost(response.data);
    });

    useEffect(() => {
        fetchPostById();
    }, [params.id]);

    return (
        <div>
            <h1>This post page {params.id}</h1>
            {isLoading
                ? <Loader />
                : <div>{post.id}. {post.title}</div>
            }
        </div>
    );
};

export default PostIdPage;
