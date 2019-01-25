import React from 'react';
import Friends from './Friends';
import './Friends.css'

function FriendList(props) {
    return (
        <div>
        {props.friends.map( friend => {
            return <Friends key={friend.id} friend={friend} 
            deleteFriend={props.deleteFriend}
            updateFriend={props.updateFriend}
            populateForm={props.populateForm} 
            />

        })}

        </div>

    )
    }

    export default FriendList;



