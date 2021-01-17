import React from 'react';
import './User.css';

const User = (props) => {
    return (
        <div className="User">
            <h3>{props.name}</h3>
            <div className="UserInfo">
                <p><strong>Email: </strong>{props.email}</p>
                <p><strong>City: </strong>{props.city}</p>
                <p><strong>Website: </strong>{props.website}</p>
            </div>
        </div>
    )
} 

export default User;