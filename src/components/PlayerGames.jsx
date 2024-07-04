import BootstrapContainer from "./BootstrapContainer"
import Row from "./Row"
import { useState } from "react";


const PlayerGames = ({playerGames,playerUserName,lastMonthGames,dateFunction}) => {

    const lastMonthGamesObjects = lastMonthGames.games;
   
    console.log(lastMonthGamesObjects);

    const mostRecentGame = lastMonthGamesObjects[lastMonthGames.games.length -1];
    const secondMostRecentGame = lastMonthGamesObjects[lastMonthGames.games.length -2];
    const thirdMostRecentGame = lastMonthGamesObjects[lastMonthGames.games.length -3];

   
    function capitalizeFirstLetter(string) {
        if (!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    } //the api decapitalises the username in the search
    
    // The reason why I've had to do functions rather than access props directly is because we need to find out what colour piece the user is first due to the way the api is layed out
    // to get the accuracy of the user the api is {black: {result: "win",user: danash_0408}}, accuracy : {white :80 , black: 60}} etc so in order to the info needed we need to use functions rather than accsess props directly
    const whatColourIsUser = (playerUserName,gameBeingShown) => {
        if(capitalizeFirstLetter(playerUserName) === gameBeingShown.black.username){
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

    const oponentUserName = (game) => {
        const userColour = whatColourIsUser(playerUserName,game);
        if(userColour == "black"){
            return game.white.username;
        }
        else{
            return game.black.username;
        }
    }

    // const outcome = (game) => {
    //     const userColour = whatColourIsUser(playerUserName,game);
    //     console.log(userColour);
    //     console.log(game.userColour.result);
    //     if(game.userColour.result == "win"){
    //         return "Win";
    //     }
    //     else if (game.userColour.result == "draw"){
    //         return "Draw";
    //     }
    //     else{
    //         return "Loss";
    //     }
    // }


    return(
        <>
            
            <BootstrapContainer>
                <Row>
                    <div className = "card-container col-lg-4 col-md-12 col-sm-12">
                     <div className="card card-game">
                        <div className="card-body">
                     <h5 className="card-title">Recent Game 1 on {dateOfGame(mostRecentGame)} vs {oponentUserName(mostRecentGame)}</h5>
                      <p className = "card-text">Time control: {timeControl(mostRecentGame)}</p>
                       <p className = "card-text">{`${playerUserName}`} : {whatColourIsUser(playerUserName,mostRecentGame)}</p>
                       {/* <p className = "card-text">Outcome: {outcome(mostRecentGame)}</p> */}
                       <p className = "card-text">{`${playerUserName}`} accuracy: {UserAccuracy(playerUserName,mostRecentGame)} vs {oponentUserName(mostRecentGame)} accuracy: {UserAccuracy(oponentUserName(mostRecentGame),mostRecentGame)}</p> 
                     </div>
                </div>
                </div>

                <div className = "card-container col-lg-4 col-md-12 col-sm-12">
                     <div className="card card-game">
                        <div className="card-body">
                     <h5 className="card-title">Recent Game 2 on {dateOfGame(secondMostRecentGame)} vs {oponentUserName(secondMostRecentGame)}</h5>
                      <p className = "card-text">Time control: {timeControl(secondMostRecentGame)}</p>
                       <p className = "card-text">{`${playerUserName}`} : {whatColourIsUser(playerUserName,secondMostRecentGame)}</p>
                       <p className = "card-text">{`${playerUserName}`} accuracy: {UserAccuracy(playerUserName,secondMostRecentGame)} vs {oponentUserName(secondMostRecentGame)} accuracy: {UserAccuracy(oponentUserName(secondMostRecentGame),secondMostRecentGame)}</p> 
                     </div>
                </div>
                </div>

                <div className = "card-container col-lg-4 col-md-12 col-sm-12">
                     <div className="card card-game">
                        <div className="card-body">
                     <h5 className="card-title">Recent Game 3 on {dateOfGame(thirdMostRecentGame)} vs {oponentUserName(thirdMostRecentGame)}</h5>
                      <p className = "card-text">Time control: {timeControl(thirdMostRecentGame)}</p>
                       <p className = "card-text">{`${playerUserName}`} : {whatColourIsUser(playerUserName,thirdMostRecentGame)}</p>
                       <p className = "card-text">{`${playerUserName}`} accuracy: {UserAccuracy(playerUserName,thirdMostRecentGame)} vs {oponentUserName(thirdMostRecentGame)} accuracy: {UserAccuracy(oponentUserName(thirdMostRecentGame),thirdMostRecentGame)}</p> 
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