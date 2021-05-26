import React from "react";

const Person = ({ person }) => {
  return (
    <>
      <h2>
        Full Name: {person.name.first}.{person.name.last}
      </h2>
      <h3>
        Address: {person.location.postcode} {person.location.street.name},
        {person.location.country}
      </h3>
      <h4>{person.email}</h4>
      <h4>{person.phone}</h4>
    </>
  );
};

export default Person;
