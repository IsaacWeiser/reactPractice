import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const HeroList = (props) => {
  const [heroes, getHero] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8088/heroes`)
      .then((heros) => {
        return heros.json();
      })
      .then((data) => {
        return getHero(data);
      });
  }, []);

  return (
    <>
      <h2>Heroes</h2>

      {heroes.map((hero) => {
        return (
          <p key={`hero--${hero.id}`}>
            <Link to={`/heros/${hero.id}`}>{hero.alias}</Link>
          </p>
        );
      })}
    </>
  );
};
