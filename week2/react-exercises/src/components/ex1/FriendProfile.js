import React from "react";
import Person from "./Person";
const FriendProfile = ({ friend }) => {
  return (
    <div className="profile">
      <ul>
        <Person key={friend.login.uuid} person={friend} />
      </ul>
    </div>
  );
};

export default FriendProfile;
