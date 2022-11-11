import React, { useEffect, useState } from "react";
import { arrayData } from "./data";
//import useFetch from "../hooks/fetchData";
import FindLocation from "./findLocation/FindLocation";
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
      {/*  <div>
        {vectors && vectors.map((vector) => <FindLocation array={vector} />)}
      </div> */}

      <div>
        {arrayData.map((vector) => (
          <FindLocation array={vector} />
        ))}
      </div>
    </>
  );
};

export default Vectors;
