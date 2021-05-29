import React from 'react';

function FriendProfile({ friend }) {
  return (
    <div>
      <ul>
        <li>
          Name: {friend.name.first} {friend.name.last}
        </li>
        <li>
          Address: {friend.location.street.name} {friend.location.street.number}
          , {friend.location.postcode} {friend.location.city},{' '}
          {friend.location.country}
        </li>
        <li>Email: {friend.email}</li>
        <li>Phone: {friend.phone}</li>
      </ul>
    </div>
  );
}

export default FriendProfile;
