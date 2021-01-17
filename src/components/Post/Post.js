import React from 'react';
import Button from '../Button/Button';
import './Post.css';

const Post = (props) => {
    return (
        <div className="Post">
            <div className="PostInfo">
                <p className="Title">{props.title}</p>
                <p>{props.body}</p>
            </div>
            <Button
                label={props.buttonLabel}
                postId={props.postId} 
                clicked={props.showCommentsButtonHandler}
                disabled={props.disableButton}/>
        </div>
    )
} 

export default Post;