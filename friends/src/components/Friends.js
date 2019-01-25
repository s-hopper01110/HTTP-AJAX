import React from 'react'

function Friends(props) {
    return (
        <div>
            <button onClick={e => props.populateForm(e, props.friend.id)}>Update</button>
            <h1>{props.friend.name}</h1>
            <p>{props.friend.age}</p>
            <p>{props.friend.email}</p>
            <button onClick={e =>props.deleteFriend(e, props.friend.id)}>Delete</button>

        </div>
    )
}

export default Friends;