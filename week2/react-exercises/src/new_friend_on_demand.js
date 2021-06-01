import React, { useState, useEffect } from "react";

function Friend () {
    const [friend, setFriend] = useState({ });

    useEffect(() => {
        getFriend ()
    }, []);

    async function getFriend (){
        try {
        const response = await fetch('https://www.randomuser.me/api?results=1');
        const data = await response.json();
        setFriend(data);
            }
    catch (err) {
        throw err
    }
    }
    return (
    <div>
        {<FriendProfile friend={friend} />}
    <div>
        {<Button getFriend={getFriend} />}
    </div>
    </div>
)
}

function Button ({ getFriend }) {
    return (
    <div>
    <button onClick={() => {getFriend()}}>
    Get a friend
    </button>
    </div>
    );
};


function FriendProfile ({friend}){
    return (
        <div>
            <ul>
            { friend.results !== undefined && friend.results.map((friend) => {
        return (
            <div key={friend.id.value}>
                <li> Name : {friend.name.title} {friend.name.first} {friend.name.last} </li>
                <li> Address :
                    {friend.location.street.name} -
                    {friend.location.street.number}
                </li>
                <li> City : {friend.location.city}  </li>
                <li> State : {friend.location.state} </li>
                <li> Country : {friend.location.country}</li>
                <li> e-mail : {friend.email}</li>
                <li> phone-no : {friend.cell}</li>
            </div>
                )
            })}
        </ul>
            </div>
    );
}
export default Friend;
