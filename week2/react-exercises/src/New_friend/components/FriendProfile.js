import React from "react";

function FriendProfile({ friend }) {
  return (
    <ul className="list" key={friend.id.value}>
      <li>First name: {friend.name.first}</li>
      <li>Last name: {friend.name.last}</li>
      <li>City: {friend.location.city}</li>
      <li>Country: {friend.location.country}</li>
      <li>Email: {friend.email}</li>
      <li>Phone: {friend.cell}</li>
    </ul>
  );
}

export default FriendProfile;
