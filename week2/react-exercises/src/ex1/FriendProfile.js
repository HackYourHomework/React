import React from "react";

const FriendProfile = ({ friend }) => {
    return (
     
      <ul>
        <img src={friend.picture.large} alt={friend.name.first} />
        <li><strong>Name: {friend.name.title}. {friend.name.first}{friend.name.last}</strong></li>
        <li>Address: {friend.location.city} - {friend.location.country}</li>
        <li><strong>Email Address: {friend.email}</strong></li>
        <li>Phone Number: {friend.phone}</li>
        <li><strong>Gender: {friend.gender}</strong></li>
      </ul>
      
    );
};

export default FriendProfile;
