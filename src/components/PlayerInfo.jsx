import "./style/PlayerInfo.css"

const PlayerInfo = (props) => {

    let profileImg = props.playerImg;

    if(props.playerUserName === undefined) {
        return (<></>);
    }

    if(profileImg === undefined) {
        profileImg = "https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg";
    }

    return(
        <>
            <div className="card card-player col-lg-12">
                <img src={profileImg} className="card-img-top" alt="Player profile picture"/>
                <div className="card-body">
                    <h5 className="card-title">Username: {props.playerUserName}</h5>
                    <p className="card-text">Followers: {props.playerFollowers}</p>
                    <p className="card-text">League: {props.playerLeague}</p>
                    <p className="card-text">Last online: {props.playerLastOnline}</p>
                    <p className="card-text">Date joined: {props.playerJoinedTimeStamp}</p>
                    <p className="card-text">Country: {props.playerCountry.name}</p>
                </div>
            </div>
        </>
    )
}

export default PlayerInfo;