import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { HeroList } from "../heros/hero";
import { VillianList } from "../villains/villain";
import { CityList } from "../cities/city";
import { IdivHero } from "../heros/heroRoute";
import { IndivVill } from "../villains/villainRoute";
import { IndivCity } from "../cities/cityRoute";
import { AddHeroForm } from "../heros/AddHero";

export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/heros">
        <HeroList />
      </Route>
      <Route path="/villians">
        <VillianList />
      </Route>
      <Route path="/cities">
        <CityList />
      </Route>
      <Route exact path="/heros/:heroId(\d+)">
        <IdivHero name="yeety boi" alias="the boi" />
      </Route>
      <Route exact path="/villains/:villId(\d+)">
        <IndivVill />
      </Route>
      <Route exact path="/citys/:cityId(\d+)">
        <IndivCity />
      </Route>
      <Route exact path="/heros/new">
        <AddHeroForm />
      </Route>
    </>
  );
};
