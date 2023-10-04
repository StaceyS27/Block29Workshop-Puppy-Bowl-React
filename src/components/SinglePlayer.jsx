import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export default function SinglePlayer () {
    const [] = useState(null)
    const params = useParams()
    
    const playerId = params.id

    useEffect(() => {
       async function fetchSinglePlayer () {
            try {
                const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-PT-SF/players/${playerId}`);
                const dataObj = await response.json();
                const singlePlayer = (dataObj.data.player);
                console.log(singlePlayer);



            } catch(e){
                console.error("did not fetch single player")
            }

        }
        fetchSinglePlayer();
    }, []
    ) 
    return (
        <>
        
        
        
        
        </>
    )
}