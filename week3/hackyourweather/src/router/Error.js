import React from "react";
import { Link, useHistory } from "react-router-dom";
const Error = () => {
  const history = useHistory();

  return (
    <div>
      <h1>Error Page</h1>
      <Link to="/">
        <button className="btn" onClick={() => history.goBack()}>
          Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
