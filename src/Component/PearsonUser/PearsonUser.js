import React from "react";

import './PearsonUser.css'

export const PearsonUser = ({user, deleteUser}) => {
    let {first_name,last_name,avatar,id} = user
    return (
        <div className="user">
            <img src={avatar} alt={first_name} />
            <h3>{first_name} {last_name}</h3>
            <div className="delete-btn">
                <button onClick={() => deleteUser(id)}>Delete</button>
            </div>
        </div>
    )
};
