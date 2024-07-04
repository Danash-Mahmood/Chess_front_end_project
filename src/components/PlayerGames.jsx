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

    // console.log(lastMonthGames);
    const lastMonthGamesObjects = lastMonthGames.games;
    // console.log(lastMonthGames.games);

    const mostRecentGame = lastMonthGamesObjects[lastMonthGames.games.length -1];
    const secondMostRecentGame = lastMonthGames[lastMonthGames.games.length -2];
    const thirdMostRecentGame = lastMonthGames[lastMonthGames.games.length -3];

    console.log(mostRecentGame);

    // console.log(mostRecentGame.accuracies);

    const whatColourIsUser = (playerUserName,gameBeingShown) => {
        if(playerUserName === gameBeingShown.black.username){
            return "black";
        }
        else{
            return "white";
        }
    }

    const UserAccuracy = (playerUserName,gameBeingShown) => {
        const userColour = whatColourIsUser(playerUserName,gameBeingShown)
        if(gameBeingShown.accuracies === undefined){
            return "N/A";
        }
        else if (userColour === "black"){
            return gameBeingShown.accuracies.black;
        }
        else{
            return gameBeingShown.accuracies.white;
        }
    }

    const timeControl = (game) => {
        return game.time_class;

    }


    return(
        <>
            
            <BootstrapContainer>
                <Row>
                    <h2>Recent Game 1</h2>
                    <hr></hr>
                    <p>Time control: {timeControl(mostRecentGame)}</p>
                    <p> {`${playerUserName}`} : {whatColourIsUser(playerUserName,mostRecentGame)} pieces</p>
                    <p>{`${playerUserName}`} accuracy is {UserAccuracy(playerUserName,mostRecentGame)} </p>
                    {/* <Game lastMonthGames = {lastMonthGames} playerUserName = {playerUserName}></Game> */}
                </Row>
            </BootstrapContainer>
        </>
    )
}

export default PlayerGames;