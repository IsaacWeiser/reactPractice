import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

export const VillianList = () =>{
const [vills, updateVill] = useState([]);

useEffect(()=>{
    fetch(`http://localhost:8088/villains`)
    .then(vills=> vills.json())
    .then(data=>updateVill(data))
},[])

return (
    <>
    <h2>villians</h2>
    {
        vills.map(vill=>{
            return <p> 
             <Link to={`/villains/${vill.id}`}>
                        {vill.name}
                    </Link>
                    </p>
        })
    }
    </>
)

}