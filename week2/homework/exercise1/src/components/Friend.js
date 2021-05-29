import React, { useState } from 'react';
import Button from './Button';
import FriendProfile from './FriendProfile';

function Friend() {
  const [friend, setFriend] = useState(null);
  const [isError, setError] = useState();
  const [loading, setLoading] = useState(false);

  async function GetFriend() {
    try {
      setFriend('');
      setLoading(true);
      const response = await fetch('https://www.randomuser.me/api?results=1');
      // if (!response.ok) {
      //   throw Error(`An error has occurred`);
      // }
      const data = await response.json();
      setFriend(data.results[0]);
      setLoading(false);
    } catch (error) {
      setError('Something went wrong');
      setLoading(false);
    }
  }
  return (
    <div>
      {isError && <p>{isError}</p>}
      {!isError && <Button GetFriend={GetFriend} friend={friend}></Button>}
      {loading && <p>Loading...</p>}
      {!isError && friend && <FriendProfile friend={friend} />}
    </div>
  );
}

export default Friend;
