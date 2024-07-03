import BootstrapContainer from "./BootstrapContainer"
import Row from "./Row"

const PlayerGames = () => {

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

    return(
        <>
            <h3>This is player games component</h3>
            <BootstrapContainer>
                <Row>
                    
                </Row>
            </BootstrapContainer>
        </>
    )
}

export default PlayerGames;