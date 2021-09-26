import React from 'react'
import {Link} from "react-router-dom";

const Card = ( { id, avatar_url, login, items } ) => {
    return (
        <>
                <div className="user-block">
                    <div className="avatar">
                        <img className="avatar-img" alt='user' src={avatar_url} />
                    </div>
                    <h3 className="login">{login}</h3>
                    <Link className="profile-btn"
                        to={{
                            pathname: `/profile/${id}`,
                            state: { data: {...items} }
                        }}>
                        go to profile
                    </Link>
                </div>
        </>
    )
}

export default Card

