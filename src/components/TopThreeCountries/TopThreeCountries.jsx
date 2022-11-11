import React from "react";

const TopThreeCountries = ({ arrayData }) => {
  const allCountries = arrayData.map((element) => element[2]);
  const map = {};
  allCountries.forEach((el) => {
    if (map.hasOwnProperty(el)) {
      map[el]++;
    } else {
      map[el] = 1;
    }
  });
  const sorted = Object.keys(map).sort((a, b) => map[b] - map[a]);
  const result = sorted.slice(0, 3);

  return (
    <h2>
      The top 3 countries of origin since the application is running are{" "}
      {result[0]}, {result[1]} and {result[2]}
    </h2>
  );
};

export default TopThreeCountries;
