import './FriendProfile.css';

const FriendProfile = ({ data }) => {
  const { name, location, email, phone } = data;

  return (
    <ul>
      <li>
        <span>Name: </span>
        {name.first} {name.last}
      </li>
      <li>
        <span>Address: </span>
        {location.street.number} {location.street.name}, {location.postcode}
      </li>
      <li>
        <span>City: </span>
        {location.city}, {location.state}
      </li>
      <li>
        <span>Country: </span>
        {location.country}
      </li>
      <li>
        <span>Email: </span>
        {email}
      </li>
      <li>
        <span>Phone number: </span>
        {phone}
      </li>
    </ul>
  );
};

export default FriendProfile;
