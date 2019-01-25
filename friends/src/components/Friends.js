import React from 'react'

function Friends(props) {
    return (
        <div>

            <h1>{props.friend.name}</h1>
            <p>{props.friend.age}</p>
            <p>{props.friend.email}</p>
            <button>Delete</button>

        </div>
    )
}

export default Friends;