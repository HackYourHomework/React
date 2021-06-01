import { useState } from 'react';
import Button from './Button';
import FriendProfile from './FriendProfile';

const Friend = () => {
  const [friend, setFriend] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorVariable, setError] = useState(false);

  const getFriend = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://www.randomuser.me/api?results=1');
      const data = await response.json();
      setFriend(data.results[0]);
      setLoading(false);
    } catch (error) {
      setError(`This error ${error} happened.`);
      setLoading(false);
    }
  };

  return (
    <div>
      <Button onClick={getFriend}></Button>
      <hr />
      {loading && <div>Loading...</div>}
      {errorVariable && <div>{errorVariable}</div>}
      {!errorVariable && friend && <FriendProfile friend={friend} />}
    </div>
  );
};

export default Friend;
