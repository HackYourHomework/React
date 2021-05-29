import React, { useState } from "react";
import Button from "../Button";
import FriendProfile from "./FriendProfile";

const Friend = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [friend, setFriend] = useState();
  const getFriend = async () => {
    setLoading(true);
    try {
      const resp = await fetch("https://www.randomuser.me/api?results=1");
      const data = await resp.json();
      if (!resp.ok) {
        throw new Error(data.message);
      }
      setLoading(false);
      setError(false);
      setFriend(data.results[0]);
    } catch (err) {
      setLoading(false);
      setError(err.message);
      setFriend();
      console.log(err);
    }
  };

  return (
    <div>
      <Button text="Get A friend!" onClick={getFriend} />
      {error ? (
        <h1>{error}</h1>
      ) : loading ? (
        <h1>loading ...</h1>
      ) : friend ? (
        <FriendProfile friend={friend} />
      ) : (
        <h5>Get your first friend by clicking the button!</h5>
      )}
    </div>
  );
};

export default Friend;
