import BootstrapContainer from "./BootstrapContainer"
import Row from "./Row"
import { useState } from "react";

const PlayerGames = ({playerGames,playerUserName,lastMonthGames}) => {

    // For this file you will just need to get the game data similar to the PlayerStats and then just iterate through the number
    // of games you want with a for loop and create a card for each one. Code will be somewhat similar to below and will go between the rows:

    /* 
    * for (int i = 0; i < 3; i++) {
            <Game
                gameDate = {props.gameDate}
                outcome = {props.outcome}
                gameWinner = {props.winner}
                gameLoser = {props.loser}
            />
        }
    *
    */
    const lastMonthGamesObjects = lastMonthGames.games;
    console.log(lastMonthGames.games);

    const mostRecentGame = lastMonthGamesObjects[lastMonthGames.games.length -1];
    const secondMostRecentGame = lastMonthGames[lastMonthGames.length -2];
    const thirdMostRecentGame = lastMonthGames[lastMonthGames.length -3];

    console.log(mostRecentGame);


    return(
        <>
            <h3>This is player games component</h3>
            <BootstrapContainer>
                <Row>
                    <p>lastMonthGamesData</p>
                </Row>
            </BootstrapContainer>
        </>
    )
}

export default PlayerGames;