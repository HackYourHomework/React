import React, { useState } from "react";
import Button from "../Button";
import FriendProfile from "./FriendProfile";

const Friend = () => {
  const [friend, setFriend] = useState();
  const getFriend = async () => {
    try {
      const resp = await fetch("https://www.randomuser.me/api?results=1");
      const data = await resp.json();
      setFriend(data.results[0]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Button text={"Get A friend"} onClick={getFriend} />
      {friend && <FriendProfile friend={friend} />}
    </div>
  );
};

export default Friend;
