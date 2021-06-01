import { useState } from 'react';
import FriendProfile from './FriendProfile';
import './Friend.css';

const Friend = () => {
  const [friend, setFriend] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getFriend = async () => {
    const url = `https://www.randomuser.me/api?results=1`;
    const resp = await fetch(url);
    if (!resp.ok) return setIsError(true);
    const friend = await resp.json();

    setFriend(friend.results[0]);
    setIsLoading(false);
  };

  const showFriend = () => {
    setIsLoading(true);
    return getFriend();
  };

  const Button = () => <button onClick={showFriend}>Get a friend!</button>;

  return (
    <div className="container">
      <Button />
      <div className="wrapper">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Oops something went wrong!</p>}
        {!isError && Object.entries(friend).length !== 0 && (
          <FriendProfile data={friend} />
        )}
      </div>
    </div>
  );
};

export default Friend;
