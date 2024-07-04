import PlayerSearchForm from "../components/PlayerSearchForm";
import Player from "./Player";

const ChessPlayerContainer = ({onSearchPlayer , playerData , playerCountry,dateFunction}) => {

    const fetchPlayerData = async (username) => {
        const [playerData, playerGames, playerCountry, playerStats,lastMonthGames] = await fetchPlayer(username);
        onSearchPlayer(playerData, playerGames, playerCountry, playerStats,lastMonthGames);
    }

    const fetchPlayer = async (username) => {

        let response = await fetch(`https://api.chess.com/pub/player/${username}`);
        const playerData = await response.json();

        response = await fetch(`https://api.chess.com/pub/player/${username}/games/archives`);
        const playerGames = await response.json();
        // console.log(playerGames);
        const gamesArray = playerGames["archives"];
        // console.log(gamesArray);
        const lastMonthGamesURL= gamesArray[gamesArray.length -1];
        // console.log(lastMonthGamesURL);
        response = await fetch(lastMonthGamesURL);
        const lastMonthGames = await response.json();




        response = await fetch(`${playerData.country}`);
        const playerCountry = await response.json();

        response = await fetch(`https://api.chess.com/pub/player/${username}/stats`)
        const playerStats = await response.json();

        return [playerData, playerGames, playerCountry, playerStats,lastMonthGames];
    }
  

    return(
        <>
            <PlayerSearchForm fetchPlayerData = {fetchPlayerData}/>
            <Player playerData = {playerData} playerCountry = {playerCountry} dateFunction = {dateFunction}></Player>
        </>
    )

   
    
}

export default ChessPlayerContainer;