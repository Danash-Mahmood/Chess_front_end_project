import PlayerSearchForm from "../components/PlayerSearchForm";
import PlayerStats from "../components/PlayerStats";
import Player from "./Player";

const ChessPlayerContainer = () => {


    return(
        <>

        <h1>This is the container</h1>
        <Player></Player>

        <PlayerSearchForm></PlayerSearchForm>
        </>
    )
    
}

export default ChessPlayerContainer;