import { useState, useEffect } from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"

export const IndivCity = ()=>
{
    const {cityId} = useParams();

    const [city, updateCity] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:8088/citys/${cityId}`)
        .then((city)=> city.json())
        .then((data)=> updateCity(data))
    }, [cityId])

    return (
        <>
        <h1>{city?.name}</h1>
        <p>universe: {city?.universe}</p>
        </>
    )
}