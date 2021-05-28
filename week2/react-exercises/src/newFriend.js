import React, { useState, useEffect } from "react";
let preventFirstRender = false;
const Friend = () => {
  const [friend, setFriend] = useState({});
  useEffect(() => {
    getFriend();
  }, []);
  const getFriend = async () => {
    if (preventFirstRender) {
      const res = await fetch("https://www.randomuser.me/api?results=1");
      const data = await res.json();
      setFriend(data);
    }
  };
  return (
    <div>
      {<Button getFriend={getFriend} />}
      <div>
        {friend.results !== undefined && <FriendProfile friend={friend} />}
      </div>
    </div>
  );
};

const FriendProfile = ({ friend }) => {
  return (
    <div>
      <ul>
        {friend.results !== undefined &&
          friend.results.map((singleFriend) => {
            return (
              <div>
                <li key={singleFriend.id.value}>{singleFriend.name.first}</li>
                <li key={singleFriend.id}>{singleFriend.name.second}</li>
                <li key={singleFriend.id}>
                  {singleFriend.location.state},{singleFriend.location.city},
                  {singleFriend.location.street.name},
                  {singleFriend.location.street.number}
                </li>
                <li key={singleFriend.id}>{singleFriend.location.country}</li>
                <li key={singleFriend.id}>{singleFriend.email}</li>
                <li key={singleFriend.id}>{singleFriend.cell}</li>
              </div>
            );
          })}
      </ul>
    </div>
  );
};

const Button = ({ getFriend }) => {
  return (
    <div>
      <button
        onClick={() => {
          preventFirstRender = true;
          getFriend();
        }}
      >
        Get a friend
      </button>
    </div>
  );
};
export default Friend;
