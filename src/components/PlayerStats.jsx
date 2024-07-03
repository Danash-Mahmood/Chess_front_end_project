

const PlayerStats = (props) => {

   




    return(
        <>
        <h2>Statistics for {`${props.playerUserName}`}</h2> 
        <h2>Rapid</h2>
        <p>Current Rapid Rating: {props.playerRapidStats.last.rating}</p>
        <p>Best Rapid Rating: {props.playerBulletStats.best.rating}</p>
        <p>Record: Wins {props.playerRapidStats.record.win} Losses {props.playerRapidStats.record.loss} Draws {props.playerRapidStats.record.draw}</p> 
        <h2>Blitz</h2>
        <p>Current Blitz Rating: {props.playerBlitzStats.last.rating}</p>
        <p>Best Blitz Rating: {props.playerRapidStats.best.rating}</p>
        <p>Record: Wins {props.playerBlitzStats.record.win} Losses {props.playerBlitzStats.record.loss} Draws {props.playerBlitzStats.record.draw}</p> 
        <h2>Bullet</h2>
        <p>Current Bullet Rating: {props.playerBulletStats.last.rating}</p>
        <p>Best Bullet Rating: {props.playerBulletStats.best.rating}</p>
        <p>Record: Wins {props.playerBulletStats.record.win} Losses {props.playerBulletStats.record.loss} Draws {props.playerBulletStats.record.draw}</p> 
         
        
        </>
     
    )

}

export default PlayerStats;