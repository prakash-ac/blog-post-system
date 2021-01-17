import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import Post from '../../components/Post/Post';
import Comment from '../../components/Comment/Comment';
import './PostWithComments.css';

const PostWithComments = (props) => {

    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getPostAndComments();
    }, [])
    
    const getPostAndComments = () => {
        axios.get(`/posts/${props.match.params.id}`)
            .then(response => {
                setPost(response.data);
                //console.log(response.data);
            })
        axios.get(`/posts/${props.match.params.id}/comments`)
        .then(response => {
            const comments = [...response.data];
            setComments(comments);
            // console.log(comments);
        })
    }

    const hideCommentsButtonHandler = (id) => {
        props.history.goBack();
    }
    
    const postComponent = <Post 
            key={post.id}
            postId={post.id}
            title={post.title}
            body={post.body}
            showCommentsButtonHandler={hideCommentsButtonHandler}
            buttonLabel="Hide Comments"
        />

    const commentComponents = comments.map(comment => {
        return (
            <Comment
                key={comment.id} 
                name={comment.name}
                body={comment.body}
            />
        )

    })

    return(
        <div className="PostWithComments">
            <div className="Post2">
                {postComponent}
            </div>
            {commentComponents}
        </div>
    )
}

export default PostWithComments;
