const PlayerInfo = (props) => {



    return(
        <>
            <h3>This is the player info component</h3>
            <p>Username: {props.playerUserName}</p>
            <p>Followers: {props.playerFollowers}</p>
            <p>League: {props.playerLeague}</p>
            <p>Last online: {props.playerLastOnline}</p>
            <p>Date joined: {props.playerJoinedTimeStamp}</p>
            <p>Country: {props.playerCountry.name}</p>

        
        </>
    )
}

export default PlayerInfo;