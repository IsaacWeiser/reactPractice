import { useState, useEffect } from "react"
import { Route } from "react-router-dom"
import { CityList } from "../cities/city.js"
import { HeroList } from "../heros/hero.js"
import { ApplicationViews } from "../nav/applicationViews.js"
import { Navbar } from "../nav/navbar.js"
import { VillianList } from "../villains/villain.js"

export const Display =()=> 
<>
<Route>
    <Navbar />
    <ApplicationViews />
</Route>
</>