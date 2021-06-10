import React from 'react';

const FriendProfile = ({ friend }) => {
  return (
    <div style={{ margin: '20px' }}>
      <div>
        <span>First Name: {friend.name.first}</span>
        <span>-</span>
        <span>Last Name: {friend.name.last}</span>
      </div>
      <div>
        <p>Address:</p>
        <ul>
          <li>{friend.location.street.name}</li>
          <li>{friend.location.street.number}</li>
          <li>{friend.location.postcode}</li>
          <li>{friend.location.city}</li>
          <li>{friend.location.country}</li>
        </ul>
      </div>
      <div>
        <span>Phone: {friend.phone}</span>
        <span>-</span>
        <span>Email: {friend.email}</span>
      </div>
      <hr />
    </div>
  );
};

export default FriendProfile;
