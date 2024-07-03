import { useState , useEffect } from "react";
import PlayerSearchForm from "../components/PlayerSearchForm";
import PlayerStats from "../components/PlayerStats";
import Player from "./Player";

const ChessPlayerContainer = () => {

    const [player ,  setPlayer] = useState({});
    const [playerGames , setPlayerGames] = useState([]);

    const fetchPlayer = async (username) => {
        const response = await fetch(`https://api.chess.com/pub/player/${username}`);
        const playerData = await response.json();
        setPlayer(playerData);
        fetchPlayerGames(username);
    }

    const fetchPlayerGames = async (username) => {
        const response = await fetch(`https://api.chess.com/pub/player/${username}/games/archives`);
        const gameData = await response.json();
        setPlayerGames(playerGames);
    }

    return(
        <>

        <h1>This is the container</h1>
        <Player playerData = {playerData}></Player>
        <PlayerSearchForm fetchPlayer = {fetchPlayer}/>
        </>
    )
    
}

export default ChessPlayerContainer;