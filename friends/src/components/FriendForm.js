import React from 'react';

function FriendForm(props) {
    return (

        <div className="forms">

        <form  autoComplete="off"> 
            <h1>Friends:</h1>

        <input className="name"
            value={props.newFriend.name}
            type="text"
            name="name"
            placeholder="Name"
            onChange={props.handleChanges}

        />

        <input className="age"
            value={props.newFriend.age}
            type="text"
            name="age"
            placeholder="age"
            onChange={props.handleChanges}

        />


        <input className="email"
            value={props.newFriend.email}
            type="text"
            name="email"
            placeholder="email"
            onChange={props.handleChanges}

        />

        <button onClick={props.addNewFriend} type="submit" className="submitButton">Add a Friend!</button>

        </form>


        </div>

    )

}//end curly brace

export default FriendForm;