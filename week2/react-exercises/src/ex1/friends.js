import React, { useState } from "react";
import Button from "./button";
import FriendProfile from "./FriendProfile";

const Friend = () => {
  const [friend, setFriend] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const url = "https://www.randomuser.me/api?results=1";

  const getFriend = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      condition(res, data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  async function condition(res,data) {
    switch (res.status) {
      case 200: {
        setError(null);
        setFriend(data.results[0]);
        break;
      }
      case 404: {
        setError(error);
        break;
      }
      default: {
      }
    }
  }

  return (
    <div className="friend">
      <h1> 👋 Find your friend here 👋 </h1>
      <Button getFriend={getFriend} />
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      {Object.entries(friend).length > 0 ? (
        <FriendProfile friend={friend} />
      ) : (
        <p>Find your first friend by clicking the button!</p>
      )}
    </div>
  );
};

export default Friend;
