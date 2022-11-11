import React, { useEffect, useState } from "react";
import AltitudeSlice from "../AltituteSlice/AltitudeSlice";
import { arrayData } from "../data";
//import useFetch from "../hooks/fetchData";
import FindLocation from "../findLocation/FindLocation";
import TopThreeCountries from "../TopThreeCountries/TopThreeCountries";
const Vectors = () => {
  /* const loadData = () => {
    setIsLoading(true);
    fetch("https://opensky-network.org/api/states/all")
      .then((response) => response.json())
      .then((data) => {
        setVectors([...vectors, data]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [vectors, setVectors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (vectors.length === 0 && isLoading) {
    return <p>Loading...</p>;
  } */

  return (
    <>
      <div>
        <TopThreeCountries arrayData={arrayData} />
      </div>
      <FindLocation
        array={arrayData}
        country={"The Netherland"}
        latitude1={50.77083}
        latitude2={53.35917}
        longtitude1={3.57361}
        longtitude2={7.10833}
      />
      <AltitudeSlice array={arrayData} slicesMin={0} slicesMax={1000} />
      <AltitudeSlice array={arrayData} slicesMin={1001} slicesMax={2000} />
      <AltitudeSlice array={arrayData} slicesMin={2001} slicesMax={3000} />
    </>
  );
};

export default Vectors;
