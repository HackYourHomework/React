function FriendProfile(props) {
  const { friendInfo } = props;
  return (
    <div className="FriendProfile">
      {friendInfo && Object.keys(friendInfo).length !== 0 && (
        <ul>
          <li>
            <strong>Name:</strong> {friendInfo.name.first}{" "}
            {friendInfo.name.last}
          </li>
          <li>
            <strong>Country:</strong> {friendInfo.location.country}{" "}
          </li>
          <li>
            <strong>State:</strong> {friendInfo.location.state}
          </li>
          <li>
            <strong>City:</strong> {friendInfo.location.city}
          </li>
          <li>
            <strong>Street Name:</strong> {friendInfo.location.street.name}
          </li>
          <li>
            <strong>Street Number:</strong> {friendInfo.location.street.number}
          </li>
          <li>
            <strong>E-mail:</strong> {friendInfo.email}
          </li>
          <li>
            <strong>Phone:</strong> {friendInfo.phone}
          </li>
          <li>
            <strong>Cell:</strong> {friendInfo.cell}
          </li>
        </ul>
      )}
    </div>
  );
}

export default FriendProfile;
