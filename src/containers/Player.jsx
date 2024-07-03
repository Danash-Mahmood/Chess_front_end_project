import PlayerGames from "../components/PlayerGames";
import PlayerInfo from "../components/PlayerInfo"
import PlayerStats from "../components/PlayerStats"

const Player = ({playerData}) => {

    


    return(
        <>

        <PlayerInfo userName ={playerData.userName} playerJoinedTimeStamp = {playerData.joined} playerLastOnline = {playerData.last_online} playerLeague = {playerData.league} playerUserName = {playerData.username} playerFollowers = {playerData.followers}></PlayerInfo>

        <PlayerStats></PlayerStats>

        <PlayerGames></PlayerGames>
        
        </>
    )
}
export default Player;