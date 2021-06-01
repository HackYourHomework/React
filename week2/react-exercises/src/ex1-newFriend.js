import React, { useState } from 'react';

function Friend() {
  const [friend, setFriend] = useState({});
  function getFriend() {
    fetch('https://www.randomuser.me/api?results=1')
      .then((response) => response.json())
      .then((data) => setFriend(data.results[0]));
  }
  return (
    <div>
      <h2>Exercise 1: New friend on demand</h2>
      <Button getFriend={getFriend} />
      {Object.keys(friend).length > 0 && <FriendProfile friend={friend} />}
    </div>
  );
}

function FriendProfile({ friend }) {
  return (
    <div>
      <ul>
        <li>first name: {friend.name.first}</li>
        <li>last name: {friend.name.last}</li>
        <li>
          address: {friend.location.city} {friend.location.postcode},{' '}
          {friend.location.state}, {friend.location.street.name}{' '}
          {friend.location.street.number}
        </li>
        <li>country: {friend.location.country}</li>
        <li>email: {friend.email}</li>
        <li>phone number: {friend.phone}</li>
      </ul>
    </div>
  );
}
function Button({ getFriend }) {
  return (
    <div>
      <button onClick={() => getFriend()}>
        <h1>Get a friend!</h1>
      </button>
    </div>
  );
}
export default Friend;
