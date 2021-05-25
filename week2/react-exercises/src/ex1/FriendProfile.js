import React from "react";

const FriendProfile = ({ friend }) => {
  const title = friend.name.title;
  const firstName = friend.name.first;
  const lastName = friend.name.last;
  const gender = friend.gender;
  const image = friend.picture.large;
  const phoneNumber = friend.phone;
  const email = friend.email;
  const city = friend.location.city;
  const country = friend.location.country;

    return (
     
      <ul>
        <img src={image} alt={firstName} />
        <li>Name: {title}. {firstName}{lastName}</li>
        <li>Address: {city} - {country}</li>
        <li>Email Address: {email}</li>
        <li>Phone Number: {phoneNumber}</li>
        <li>Gender: {gender}</li>
      </ul>
    );
};

export default FriendProfile;
