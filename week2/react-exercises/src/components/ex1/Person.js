import React from "react";

const Person = ({ person }) => {
  return (
    <>
      <h3>
        Full Name: {person.name.first}.{person.name.last}
      </h3>
      <h4>
        Address: {person.location.postcode} {person.location.street.name},
        {person.location.country}
      </h4>
      <h5>{person.email}</h5>
      <h5>{person.phone}</h5>
    </>
  );
};

export default Person;
