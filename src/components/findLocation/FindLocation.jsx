import React from "react";

const FindLocation = ({ array }) => {
  const result = array.filter(
    (element) => element === "Kingdom of the Netherlands"
  );

  return <p>{result}</p>;
};

export default FindLocation;
