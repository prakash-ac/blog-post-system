import React from 'react';
import './Button.css';

const Button = (props) => {
    
    return (
        <button 
            className="Button"
            onClick={() => props.clicked(props.postId)}>
            <strong>{props.label}</strong>
        </button>
    )
}

export default Button;