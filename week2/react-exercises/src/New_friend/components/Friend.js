import React, { useState } from "react";
import Button from "./Button";
import FriendProfile from "./FriendProfile";

function Friend() {
  const [friend, setFriend] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  async function getFriend() {
    try {
      setIsLoading(true);
      const response = await fetch("https://www.randomuser.me/api?results=1");
      const data = await response.json();
      setFriend(data.results[0]);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
      setIsError(false);
    }
  }

  return (
    <div>
      <Button getFriend={getFriend} />
      <div>
        {isLoading && <p>Loading...</p>}
        {isError && <p>ERROR</p>}
        {Object.keys(friend).length !== 0 && <FriendProfile friend={friend} />}
      </div>
    </div>
  );
}

export default Friend;
