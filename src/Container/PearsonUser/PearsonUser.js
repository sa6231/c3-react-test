import React from "react";

import './PearsonUser.css'

export const PearsonUser = ({user, deleteUser}) => {
    return (
        <div className="user">
            <img src={user.avatar} alt={user.first_name} />
            <h3>{user.first_name} {user.last_name}</h3>
            <div className="delete-btn">
                <button onClick={() => deleteUser(user.id)}>Delete</button>
            </div>
        </div>
    )
};
