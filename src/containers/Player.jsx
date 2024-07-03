import PlayerGames from "../components/PlayerGames";
import PlayerInfo from "../components/PlayerInfo"
import PlayerStats from "../components/PlayerStats"

const Player = ({playerData , playerCountry}) => {

    


    return(
        <>
            <PlayerInfo
                playerName = {playerData.name}
                playerJoinedTimeStamp = {playerData.joined}
                playerLastOnline = {playerData.last_online}
                playerLeague = {playerData.league}
                playerUserName = {playerData.username}
                playerFollowers = {playerData.followers}
                playerCountry = {playerCountry}/>
        </>
    )
}
export default Player;