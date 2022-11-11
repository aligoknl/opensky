import React from "react";

const FindLocation = ({
  array,
  country,
  latitude1,
  latitude2,
  longtitude1,
  longtitude2,
}) => {
  const result = array.filter(
    (element) =>
      element[5] >= latitude1 &&
      element[5] <= latitude2 &&
      element[6] >= longtitude1 &&
      element[6] <= longtitude2
  );
  const resultNumber = result.length;

  return (
    <h2>
      The number of flights above the {country} per hour is {resultNumber}
    </h2>
  );
};

export default FindLocation;
