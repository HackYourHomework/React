import React, { useState, useEffect } from "react";
let firstRender = false;
const Friend = () => {
  const [friend, setFriend] = useState({});
  useEffect(() => {
    getFriend();
  }, []);
  const getFriend = async () => {
    if (firstRender) {
      const res = await fetch("https://www.randomuser.me/api?results=1");
      const data = await res.json();
      setFriend(data.results[0]);
    }
  };
  return (
    <div>
      {<Button getFriend={getFriend} />}
      <div>
        {friend.gender !== undefined && <FriendProfile friend={friend} />}
      </div>
    </div>
  );
};

const FriendProfile = ({ friend }) => {
  return (
    <div key={friend.id.value}>
      <ul>
        {friend.gender !== undefined && (
          <div>
            <li>{friend.name.first}</li>
            <li>{friend.name.second}</li>
            <li>
              {friend.location.state},{friend.location.city},
              {friend.location.street.name},{friend.location.street.number}
            </li>
            <li>{friend.location.country}</li>
            <li>{friend.email}</li>
            <li>{friend.cell}</li>
          </div>
        )}
      </ul>
    </div>
  );
};

const Button = ({ getFriend }) => {
  return (
    <div>
      <button
        onClick={() => {
          firstRender = true;
          getFriend();
        }}
      >
        Get a friend
      </button>
    </div>
  );
};
export default Friend;
