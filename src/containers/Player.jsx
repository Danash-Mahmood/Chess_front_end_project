import PlayerInfo from "../components/PlayerInfo"
import BootstrapContainer from "../components/BootstrapContainer"
import Row from "../components/Row"

const Player = ({playerData , playerCountry,dateFunction}) => {

    return (
        <>
            <BootstrapContainer>
                <Row>
                    <PlayerInfo
                    playerImg = {playerData.avatar}
                    playerJoinedTimeStamp = {dateFunction(playerData.joined)}
                    playerLastOnline = {dateFunction(playerData.last_online)}
                    playerLeague = {playerData.league}
                    playerUserName = {playerData.username}
                    playerFollowers = {playerData.followers}
                    playerCountry = {playerCountry}/>
                </Row>
            </BootstrapContainer>
        </>
    )
}
export default Player;