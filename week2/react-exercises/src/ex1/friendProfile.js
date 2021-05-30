// it gives an error TypeError: Cannot read property 'name' of undefined
// I can do it like ex2 and ex3 in one file but I am practicing to put every component in separated file.

import React from "react";

function FriendProfile({ friend }) {
  return (
    <ul>
      <li>
        Full name : {friend.name.title}
        {friend.name.first} {friend.name.last}
      </li>
      <li>Postcode: {friend.postcode}</li>
      <li>Country : {friend.country}</li>
      <li>Email : {friend.email}</li>
      <li>phone number : {friend.phone}</li>
    </ul>
  );
}
export default FriendProfile;
