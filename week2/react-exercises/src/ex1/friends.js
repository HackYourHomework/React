import React, { useState, useEffect } from "react";
import Button from "./button";
import FriendProfile from "./friendProfile";

const Friends = () => {
  const [friend, setFriend] = useState();
  useEffect(() => {
    getFriend();
  }, []);

  const getFriend = () => {
    return fetch("https://www.randomuser.me/api?results=1")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results[0]);
        setFriend(data.results[0]);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Button onClick={getFriend} />
      <FriendProfile friend={friend} />
    </div>
  );
};
export default Friends;
