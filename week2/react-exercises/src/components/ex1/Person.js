import React from "react";

const Person = ({ person }) => {
  const { name, location, email, phone } = person;
  return (
    <>
      <h3>
        Full Name: {name.first}.{name.last}
      </h3>
      <h4>
        Address: {location.postcode} {location.street.name},{location.country}
      </h4>
      <h5>{email}</h5>
      <h5>{phone}</h5>
    </>
  );
};

export default Person;
