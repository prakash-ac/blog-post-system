import React from 'react';
import Button from '../Button/Button';
import './Comment.css';

const Comment = (props) => {
    return (
        <div className="Comment">
            <div className="CommentInfo">
                <p className="Name">{props.name}</p>
                <p className="CommentBody">{props.body}</p>
            </div>
        </div>
    )
} 

export default Comment;