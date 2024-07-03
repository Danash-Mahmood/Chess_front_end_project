import PlayerSearchForm from "../components/PlayerSearchForm";
import Player from "./Player";

const ChessPlayerContainer = ({onSearchPlayer , playerData , playerCountry}) => {

    const fetchPlayerData = async (username) => {
        const [playerData, playerCountry] = await fetchPlayer(username);
        const playerGames = await fetchPlayerGames(username);
        const playerStats = await fetchPlayerStats(username);
        onSearchPlayer(playerData, playerGames, playerCountry, playerStats);
    }

    const fetchPlayer = async (username) => {
        const response = await fetch(`https://api.chess.com/pub/player/${username}`);
        const playerData = await response.json();
        return [playerData, await fetchPlayerCountry(playerData.country)];
    }

    const fetchPlayerGames = async (username) => {
        const response = await fetch(`https://api.chess.com/pub/player/${username}/games/archives`);
        const gameData = await response.json();
        return gameData;
    }

    const fetchPlayerCountry = async (countryURL) => {
        const response = await fetch(`${countryURL}`);
        const countryData = await response.json();
        return countryData;
    }

    const fetchPlayerStats = async (username) => {
        const reponse = await fetch(`https://api.chess.com/pub/player/${username}/stats`)
        const statsData = await reponse.json();
        return statsData;
    }

    return(
        <>
            <h1>This is the container</h1>
            <PlayerSearchForm fetchPlayerData = {fetchPlayerData}/>
            <Player playerData = {playerData} playerCountry = {playerCountry}></Player>
        </>
    )
    
}

export default ChessPlayerContainer;