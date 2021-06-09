import React, { useState } from "react";
import FriendProfile from "./FriendProfile";
import Button from "./Button";

function Friend() {
  const [friend, setFriend] = useState({});
  const getFriend = async () => {
    const res = await fetch("https://www.randomuser.me/api?results=1");
    const data = await res.json();
    setFriend(() => data.results[0]);
  };
  return (
    <div className="Friend">
      <Button getFriend={getFriend} />
      <FriendProfile friendInfo={friend} />
    </div>
  );
}

export default Friend;
