import PlayerSearchForm from "../components/PlayerSearchForm";
import Player from "./Player";

const ChessPlayerContainer = ({onSearchPlayer , playerData , playerCountry}) => {

    const fetchPlayerData = async (username) => {
        const [playerData, playerGames, playerCountry, playerStats] = await fetchPlayer(username);
        onSearchPlayer(playerData, playerGames, playerCountry, playerStats);
    }

    const fetchPlayer = async (username) => {

        let response = await fetch(`https://api.chess.com/pub/player/${username}`);
        const playerData = await response.json();

        response = await fetch(`https://api.chess.com/pub/player/${username}/games/archives`);
        const playerGames = await response.json();

        response = await fetch(`${playerData.country}`);
        const playerCountry = await response.json();

        response = await fetch(`https://api.chess.com/pub/player/${username}/stats`)
        const playerStats = await response.json();

        return [playerData, playerGames, playerCountry, playerStats];
    }

    return(
        <>
            <PlayerSearchForm fetchPlayerData = {fetchPlayerData}/>
            <Player playerData = {playerData} playerCountry = {playerCountry}></Player>
        </>
    )
    
}

export default ChessPlayerContainer;