import { useState } from "react";
import BootstrapContainer from "./BootstrapContainer"
import Row from "../components/Row"
import "./style/PlayerSearchForm.css"

const PlayerSearchForm = ({ data , fetchPlayerData }) => {

    const [playerUserName,setPlayerUserName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchPlayerData(playerUserName);
    }

    return(

        <>
            <BootstrapContainer>
                <Row>
                    <h1 className = "title">Search for Player!</h1>
                    <form onSubmit={handleSubmit} className = "search-form">
                        <input type="text" className = "search-bar-player" placeholder = "Please enter a chess.com username" value={playerUserName} onChange = {(event) => {setPlayerUserName(event.target.value); console.log(event.target)}} ></input>
                        {/* make input window slightly longer */}
                        <input type = "submit" placeholder = "submit" ></input>
                    </form>
                </Row>
            </BootstrapContainer>
        </>
    )
}

export default PlayerSearchForm;