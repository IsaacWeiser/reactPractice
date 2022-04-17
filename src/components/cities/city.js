import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AddHeroForm } from "../heros/AddHero";

export const CityList = () => {
  const [cities, getCitys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8088/citys`)
      .then((cits) => {
        return cits.json();
      })
      .then((data) => {
        return getCitys(data);
      });
  }, []);

  return (
    <>
      <h1>Cities</h1>

      {cities.map((cityObj) => {
        return (
          <p key={`city--${cityObj.id}`}>
            <Link to={`/citys/${cityObj.id}`}>{cityObj.name}</Link>
          </p>
        );
      })}
      <AddHeroForm citys={cities} />
    </>
  );
};
