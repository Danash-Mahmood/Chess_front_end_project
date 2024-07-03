import { useState , useEffect } from "react";
import PlayerSearchForm from "../components/PlayerSearchForm";
import PlayerStats from "../components/PlayerStats";
import Player from "./Player";

const ChessPlayerContainer = () => {

    const [player ,  setPlayer] = useState({});
    const [playerGames , setPlayerGames] = useState([]);
    const [playerCountry , setCountry] = useState({});

    const fetchPlayerData = (username) => {
        fetchPlayer(username);
        fetchPlayerGames(username);
    }

    const fetchPlayer = async (username) => {
        const response = await fetch(`https://api.chess.com/pub/player/${username}`);
        const playerData = await response.json();
        setPlayer(playerData);
    }

    const fetchPlayerGames = async (username) => {
        const response = await fetch(`https://api.chess.com/pub/player/${username}/games/archives`);
        const gameData = await response.json();
        setPlayerGames(gameData);
    }

    const fetchPlayerCountry = async (countryURL) => {
        const response = await fetch(`${countryURL}`);
        const countryData = await response.json();
        setCountry(countryData);
    }

    return(
        <>

        <h1>This is the container</h1>
        <Player fetchPlayerCountry = {fetchPlayerCountry}></Player>
        <PlayerSearchForm fetchPlayerData = {fetchPlayerData}/>
        </>
    )
    
}

export default ChessPlayerContainer;