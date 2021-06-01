import React, { useState } from "react";
import Button from "../Button";
import FriendProfile from "./FriendProfile";

const Friend = () => {
  const [notification, setNotification] = useState(
    `Get your first friend by clicking the button!`
  );
  const [friend, setFriend] = useState();
  const getFriend = async () => {
    try {
      setNotification(`Loading...`);
      const resp = await fetch("https://www.randomuser.me/api?results=1");
      const data = await resp.json();
      if (!resp.ok) {
        throw new Error(data.message);
      } else {
        setNotification(``);
        setFriend(data.results[0]);
      }
    } catch (err) {
      setNotification(err.message);
      setFriend();
      console.log(err);
    }
  };

  return (
    <div>
      <Button text="Get A friend!" onClick={getFriend} />
      {notification && <h4>{notification}</h4>}
      {friend && <FriendProfile friend={friend} />}
    </div>
  );
};

export default Friend;
