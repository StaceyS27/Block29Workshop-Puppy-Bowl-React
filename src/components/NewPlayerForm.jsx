import {React, useState} from 'react';

export default function NewPlayerForm() {
    const [puppyName, setPuppyName] = useState(null);
    const [puppyStatus, setPuppyStatus] = useState(null);
    const [puppyBreed, setPuppyBreed] = useState(null);
    
    

    return (
        <>
        <h3>Add New Player</h3>
        <form  /*onSubmit={handleSubmit}*/>
            <label>
                Name:{" "}
                <input value={puppyName} onChange={(e)=>setPuppyName(e.target.value)} />
            </label>
            <label>
                Breed: {" "}
                <input value={puppyBreed} onChange={(e)=>setPuppyBreed(e.target.value)}/>
            </label>
            <label>
                Status: {" "}
                <input value={puppyStatus} onChange={(e)=>setPuppyStatus(e.target.event)} />
            </label>
            <button>Submit</button>



        </form> 
        </>
    )
}