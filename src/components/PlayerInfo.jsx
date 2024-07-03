const PlayerInfo = (props) => {



    return(
        <>
            <h2>Account information for {`${props.playerUserName}`}</h2>
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