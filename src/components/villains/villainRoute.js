import { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export const IndivVill = () => {


    const {villId} = useParams()
    
    const [villain, updateVill] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:8088/villains/${villId}`)
        .then(vill=>vill.json())
        .then(data=>updateVill(data))
    }, [villId])

    return (
        <>
        <p>
            {`alias: ${villain.alias}`}
        </p>
        <p>
            {`name: ${villain.name}`}
        </p>
        </>
    )
}