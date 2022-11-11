import React from "react";

const AltitudeSlice = ({ array, slicesMin, slicesMax }) => {
  const result = array
    .filter(
      (element) =>
        element[7] > slicesMin && element[7] < slicesMax && element[7] !== null
    )
    .sort((a, b) => a[7] - b[7])
    .map((element) => element[0] + ":" + element[7]);
  console.log(result);
  return (
    <>
      <h2>
        The number of flights between {slicesMin} and {slicesMax} is :
      </h2>
      <table>
        <thead>
          <tr>
            <th>Flight and Altitude</th>
          </tr>
        </thead>
        <tbody>
          {result.map((item) => {
            return (
              <tr>
                <td>{item}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default AltitudeSlice;
