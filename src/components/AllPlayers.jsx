import { react, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import SinglePlayer from "./SinglePlayer";


export default function AllPlayers() {
    const [playerList, setPlayerList] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAllPlayers = async () => {
            try {
                const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-PT-SF/players");
                const dataObj = await response.json();

                console.log(dataObj);
                setPlayerList(dataObj.data.players);

            } catch (e) {
                console.log("unable to fetch");
            }
        }
        fetchAllPlayers();
    }, []
    )

    return (
        <div>
            {playerList && playerList.map(function (puppy) {
                return (
                    <>
                        <div key={puppy.id}>
                            <h3> Name: {puppy.name} </h3>;
                            <img src={puppy.imageUrl} alt={puppy.name} />

                            <button onClick={() => { navigate(`/players/${puppy.id}`) }}>More Info!</button>
                        </div>
                    </>)
            })}
        </div>
    )
}
