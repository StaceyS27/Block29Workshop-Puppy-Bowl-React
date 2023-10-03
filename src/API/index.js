


const fetchAllPlayers = async () => {
    try {
        const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/2306-GHP-ET-WEB-PT-SF/players");
        data = await response.json();
        console.log(data);

    } catch(e) {
        console.error(e);
        setError(e.message);
    }
}

