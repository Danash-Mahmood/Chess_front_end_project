import { useState } from "react";

const PlayerSearchForm = ({ data , fetchPlayer }) => {


    const [playerUserName,setPlayerUserName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchPlayer(playerUserName);
    }



    return(

        <>
        <h2>This is the search form component</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder = "enter chess.com username" value={playerUserName} onChange = {(event) => {setPlayerUserName(event.target.value); console.log(event.target)}} ></input>
            {/* make input window slightly longer */}
            <input type = "submit" placeholder = "submit" ></input>
        </form>
        
        
        </>
    )
}

export default PlayerSearchForm;