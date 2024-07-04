import BootstrapContainer from "./BootstrapContainer"
import Row from "./Row"
import { useState } from "react";


const PlayerGames = ({playerGames,playerUserName,lastMonthGames,dateFunction}) => {

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
    console.log(lastMonthGamesObjects);

    const mostRecentGame = lastMonthGamesObjects[lastMonthGames.games.length -1];
    const secondMostRecentGame = lastMonthGamesObjects[lastMonthGames.games.length -2];
    const thirdMostRecentGame = lastMonthGamesObjects[lastMonthGames.games.length -3];

    // console.log(mostRecentGame);
    // console.log(secondMostRecentGame);

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

    const dateOfGame = (game) => {
        return dateFunction(game.end_time);
     
    }

    const mostAccurateGameInLastMonth = (lastMonthGamesObjects) => {
        let mostAccurateGame = lastMonthGamesObjects[0];
        let maxAccuracy = 0; //why do we need the let keyword here for this to work? Wouldn't putting it in global scope also work
        for(let game of lastMonthGamesObjects){
            console.log(game);
            const playerColour = whatColourIsUser(playerUserName,game);
        //     if(game.accuracies != undefined){
        //          maxAccuracy = 0;
   
        //    }
        //    else{
        //     continue;
        //    }
            const accuracy = UserAccuracy(playerUserName,game);

            if(accuracy > maxAccuracy){
                maxAccuracy = accuracy;
                mostAccurateGame = game;
            }
            else{
                continue;
            }
        }
        return mostAccurateGame;
    }


    return(
        <>
            
            <BootstrapContainer>
                <Row>
                    <div className = "card-container col-lg-4 col-md-12 col-sm-12">
                     <div className="card card-game">
                        <div className="card-body">
                     <h5 className="card-title">Recent Game 1 on {dateOfGame(mostRecentGame)}</h5>
                      <p className = "card-text">Time control: {timeControl(mostRecentGame)}</p>
                       <p className = "card-text">{`${playerUserName}`} : {whatColourIsUser(playerUserName,mostRecentGame)}</p>
                       <p className = "card-text">{`${playerUserName}`} accuracy is {UserAccuracy(playerUserName,mostRecentGame)}</p> 
                     </div>
                </div>
                </div>

                <div className = "card-container col-lg-4 col-md-12 col-sm-12">
                     <div className="card card-game">
                        <div className="card-body">
                     <h5 className="card-title">Recent Game 2 on {dateOfGame(secondMostRecentGame)}</h5>
                      <p className = "card-text">Time control: {timeControl(secondMostRecentGame)}</p>
                       <p className = "card-text">{`${playerUserName}`} : {whatColourIsUser(playerUserName,secondMostRecentGame)}</p>
                       <p className = "card-text">{`${playerUserName}`} accuracy is {UserAccuracy(playerUserName,secondMostRecentGame)}</p> 
                     </div>
                </div>
                </div>

                <div className = "card-container col-lg-4 col-md-12 col-sm-12">
                     <div className="card card-game">
                        <div className="card-body">
                     <h5 className="card-title">Recent Game 3 on {dateOfGame(thirdMostRecentGame)}</h5>
                      <p className = "card-text">Time control: {timeControl(thirdMostRecentGame)}</p>
                       <p className = "card-text">{`${playerUserName}`} : {whatColourIsUser(playerUserName,thirdMostRecentGame)}</p>
                       <p className = "card-text">{`${playerUserName}`} accuracy is {UserAccuracy(playerUserName,thirdMostRecentGame)}</p> 
                     </div>
                </div>
                </div>

                <div className = "card-container col-lg-4 col-md-12 col-sm-12">
                     <div className="card card-game">
                        <div className="card-body">
                     <h5 className="card-title">Most Accurate Game in last month {dateOfGame(mostAccurateGameInLastMonth(lastMonthGamesObjects))}</h5>
                      <p className = "card-text">Time control: {timeControl(mostAccurateGameInLastMonth(lastMonthGamesObjects))}</p>
                       <p className = "card-text">{`${playerUserName}`} : {whatColourIsUser(playerUserName,mostAccurateGameInLastMonth(lastMonthGamesObjects))}</p>
                       <p className = "card-text">{`${playerUserName}`} accuracy is {UserAccuracy(playerUserName,mostAccurateGameInLastMonth(lastMonthGamesObjects))}</p> 
                     </div>
                </div>
                </div>

                </Row>
            </BootstrapContainer>
        </>
    )
}

export default PlayerGames;