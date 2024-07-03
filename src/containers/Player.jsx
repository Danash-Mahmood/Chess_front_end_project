import PlayerGames from "../components/PlayerGames";
import PlayerInfo from "../components/PlayerInfo"
import PlayerStats from "../components/PlayerStats"

const Player = ({playerData , playerCountry,playerStats}) => {

    


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

            <PlayerStats 
                playerRapidStats = {playerStats["chess_rapid"]}
                playerBlitzStats = {playerStats["chess_blitz"]}
                playerBulletStats = {playerStats["chess_bullet"]}
                playerUserName = {playerData.username}
                playerJoinedTimeStamp = {playerData.joined}
                ></PlayerStats>

            <PlayerGames></PlayerGames>
        
        </>
    )
}
export default Player;