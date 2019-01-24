import React from 'react';
import Friends from './Friends';


function FriendList(props) {
    return (
        <div>
        {props.friends.map( friend => {
            return <Friends friend={friend} />

        })}

        </div>

    )
    }

    export default FriendList;



