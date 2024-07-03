const PlayerStats = (props) => {

    return(
        <>
        <h2>Statistics for {`${props.playerUserName}`}</h2> 
        <h2>Rapid</h2>
        <p>Current Rapid Rating: {props.playerStats["chess_rapid"].last.rating}</p>
        <p>Best Rapid Rating: {props.playerStats["chess_rapid"].best.rating}</p>
        <p>Record: Wins {props.playerStats["chess_rapid"].record.win} Losses {props.playerStats["chess_rapid"].record.loss} Draws {props.playerStats["chess_rapid"].record.draw}</p> 
        <h2>Blitz</h2>
        <p>Current Blitz Rating: {props.playerStats["chess_blitz"].last.rating}</p>
        <p>Best Blitz Rating: {props.playerStats["chess_blitz"].best.rating}</p>
        <p>Record: Wins {props.playerStats["chess_blitz"].record.win} Losses {props.playerStats["chess_blitz"].record.loss} Draws {props.playerStats["chess_blitz"].record.draw}</p> 
        <h2>Bullet</h2>
        <p>Current Bullet Rating: {props.playerStats["chess_bullet"].last.rating}</p>
        <p>Best Bullet Rating: {props.playerStats["chess_bullet"].best.rating}</p>
        <p>Record: Wins {props.playerStats["chess_bullet"].record.win} Losses {props.playerStats["chess_bullet"].record.loss} Draws {props.playerStats["chess_bullet"].record.draw}</p> 
        </>
     
    )

}

export default PlayerStats;