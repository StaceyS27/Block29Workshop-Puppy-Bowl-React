import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export default function SinglePlayer() {
    const [individualPlayer, setIndividualPlayer] = useState(null)
    const params = useParams()

    const playerId = params.id

    async function handleDelete() {
        try{
            const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-PT-SF/players/" + playerId,
            {
                method: "DELETE",
            })
            const result = await response.json();
            console.log(result);
        }catch(e){
            console.error(e);
        }
    }

    useEffect(() => {
        async function fetchSinglePlayer() {
            try {
                const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-PT-SF/players/${playerId}`);
                const dataObj = await response.json();
                const singlePlayer = (dataObj.data.player);
                console.log(singlePlayer);

                setIndividualPlayer(singlePlayer);


            } catch (e) {
                console.error("did not fetch single player")
            }

        }
        fetchSinglePlayer();
    }, []
    )

   
    return (
        <>
            {individualPlayer ? (
                <div>
                    <h3>Name: {individualPlayer.name}</h3>
                    <img src={individualPlayer.imageUrl} alt={individualPlayer.name} />
                    <p>Breed: {individualPlayer.breed}</p>
                    <p>Status: {individualPlayer.status}</p>
                    
                    <button onClick={()=>{handleDelete()}}>Delete Player</button> 

                </div>) : <p>loading...</p>}
            
        </>
    )
}