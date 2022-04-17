import { useState, useEffect } from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"

export const IdivHero = (props) => {

const {heroId} =useParams()

const [hero, updateHero] = useState({})

useEffect(()=>{
    fetch(`http://localhost:8088/heroes/${heroId}`)
    .then(hero => hero.json())
    .then((data)=> updateHero(data))
},[heroId])


return (
    <>
    <h3>Hero</h3>
    <p>{`name: ${Object.entries(props).length ===0? hero?.name : props.name}`}</p>
    <p>{`alias: ${hero?.alias}`}</p>
    <p>{props.alias}</p>
    </>
)

}