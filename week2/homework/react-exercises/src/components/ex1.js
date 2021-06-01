import { useState } from 'react';

const Friend = () => {
    const [friend, setFriend] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const getFriend = async () => {
      setError(false);
      setLoading(true);

    try {
      const url = "https://www.randomuser.me/api?results=1";
      const response = await fetch(url);
      const data = await response.json();
      const friendData = await data.results[0];
      setFriend(friendData);
    } catch (error) {
      setError(true);
    };
      setLoading(false);
    };
    
    return (
      <div>
        <Button onClick={getFriend} />
        {loading === true && <div>Loading...</div>}
        {error === true && <div>Cannot fetch your friends</div>}
        {Object.keys(friend).length !== 0 && <FriendProfile friend={friend} />}
      </div>
    );
};

const FriendProfile = ({ friend }) => {
    return (
      <div className='card'>
        <p>Name: {friend.name.first} {friend.name.last}</p>
        <p>
          Address: <em>{friend.location.street.number} {friend.location.street.name}<br/>
          {friend.location.city} {friend.location.state} {friend.location.postcode}</em>
        </p>
        <p>Country: {friend.location.country}</p>
        <p>Email: {friend.email}</p>
        <p>Phone: {friend.cell}</p>
      </div>
    );
};

const Button = ({ onClick }) => {
    return (
        <button className="button" onClick={onClick}>Get a friend!</button>
    );
};

export default Friend;