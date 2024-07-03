import { useState , useEffect } from "react";
import PlayerSearchForm from "../components/PlayerSearchForm";
import Player from "./Player";

const ChessPlayerContainer = () => {

    const [player ,  setPlayer] = useState({});
    const [playerGames , setPlayerGames] = useState([]);
    const [playerCountry , setCountry] = useState({});
    const [playerStats,setStats] = useState({})

    const fetchPlayerData = (username) => {
        fetchPlayer(username);
        fetchPlayerGames(username);
        fetchPlayerStats(username);
    }

    const fetchPlayer = async (username) => {
        const response = await fetch(`https://api.chess.com/pub/player/${username}`);
        const playerData = await response.json();
        setPlayer(playerData);
        fetchPlayerCountry(playerData.country);

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

    const fetchPlayerStats = async (username) => {
        const reponse = await fetch(`https://api.chess.com/pub/player/${username}/stats`)
        const statsData = await reponse.json();
        setStats(statsData);
    }

    return(
        <>
            <h1>This is the container</h1>
            <PlayerSearchForm fetchPlayerData = {fetchPlayerData}/>
            <Player playerData = {player} playerCountry = {playerCountry} playerStats = {playerStats}></Player>
        </>
    )
    
}

export default ChessPlayerContainer;