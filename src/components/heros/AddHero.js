import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const AddHeroForm = ({ citys }) => {
  // set up a state to keep track of the data

  let counter = 0;

  const [newHero, updateHero] = useState({
    Alias: "",
    Name: "",
    CityId: 0,
  });

  useEffect(() => {
    fetch(`http://localhost:8088/heroes`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      //make sure to serialize your JSON body
      body: JSON.stringify(newHero),
    });
  }, counter);

  /*const [citys, fillCity] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8088/citys`)
      .then((cits) => {
        return cits.json();
      })
      .then((data) => {
        return fillCity(data);
      });
  }, []); */

  const trackAlias = (event) => {
    updateHero({
      Alias: event.target.value,
      Name: newHero.Name,
      CityId: newHero.CityId,
    });
  };

  const trackName = (event) => {
    updateHero({
      Alias: newHero.Alias,
      Name: event.target.value,
      CityId: newHero.CityId,
    });
  };

  const trackCity = (event) => {
    updateHero({
      Alias: newHero.Alias,
      Name: newHero.Name,
      CityId: event.target.value,
    });
  };

  const appCntr = () => {
    counter += 1;
    console.log(counter);
  };

  return (
    <>
      <h1>New Hero Form</h1>
      <p>Add details below:</p>
      <label>Super Hero Name</label>
      <input type="text" onChange={trackAlias} />
      <label>Real Name</label>
      <input type="text" onChange={trackName} />
      <label>Which City Do you operate in?</label>
      <select Name="city" onChange={trackCity}>
        {citys?.map((city) => {
          return <option value={city?.id}>{city?.name}</option>;
        })}
      </select>
      <button onClick={appCntr}>Submit</button>
    </>
  );
};
