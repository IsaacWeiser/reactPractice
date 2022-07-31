import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const SuperShowdown = () => {
  const [hero, updateHero] = useState({});
  const [villian, updateVillian] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8088/heroes/${Math.random + 3}`)
      .then((hero) => hero.json())
      .then((data) => updateHero(data));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8088/villains/3`)
      .then((vill) => vill.json())
      .then((data) => updateVillian(data));
  }, []);

  return (
    <>
      <h1>showdown</h1>
      <p>{hero.name}</p>
      <p>VS</p>
      <p>{villian.name}</p>
    </>
  );
};
