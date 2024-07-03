import BootStrapContainer from "./BootstrapContainer";
import Row from "./Row";
import "./style/PlayerStats.css"

const PlayerStats = (props) => {

    if(props.playerUserName === undefined) {
        return (
        <>
            <h1>Please search for a player!</h1>
        </>
        )
    }   

    return(
        <>
            <BootStrapContainer>
                <Row>
                    <h1 className = "title">Statistics for {`${props.playerUserName}`}</h1>
                    <div className = "card-container col-lg-4 col-md-12 col-sm-12">
                        <div className="card card-stat">
                            <img src="https://images.chesscomfiles.com/uploads/v1/chess_term/80febd7c-bcb1-11ea-8ef7-07dbcd6ea7c7.090c6f94.630x354o.46122acf9ffe@2x.png" className="card-img-top" alt="blitz logo"/>
                            <div className="card-body">
                                <h5 className="card-title">Rapid</h5>
                                <p className = "card-text">Current Rapid Rating: {props.playerStats["chess_rapid"].last.rating}</p>
                                <p className = "card-text">Best Rapid Rating: {props.playerStats["chess_rapid"].best.rating}</p>
                                <p className = "card-text">Record: Wins {props.playerStats["chess_rapid"].record.win} Losses {props.playerStats["chess_rapid"].record.loss} Draws {props.playerStats["chess_rapid"].record.draw}</p> 
                            </div>
                        </div>
                    </div>
                    <div className = "card-container col-lg-4 col-md-12 col-sm-12">
                        <div className="card card-stat">
                            <img src="https://www.chessjournal.com/wp-content/uploads/2022/06/Rapid-Chess-750x422.jpg" className="card-img-top" alt="rapid logo"/>
                            <div className="card-body">
                                <h5 className="card-title">Blitz</h5>
                                <p className = "card-text">Current Blitz Rating: {props.playerStats["chess_blitz"].last.rating}</p>
                                <p className = "card-text">Best Blitz Rating: {props.playerStats["chess_blitz"].best.rating}</p>
                                <p className = "card-text">Record: Wins {props.playerStats["chess_blitz"].record.win} Losses {props.playerStats["chess_blitz"].record.loss} Draws {props.playerStats["chess_blitz"].record.draw}</p> 
                            </div>
                        </div>
                    </div>
                    <div className = "card-container col-lg-4 col-md-12 col-sm-12">
                        <div className="card card-stat">
                            <img src="https://images.chesscomfiles.com/uploads/v1/chess_term/6d38c776-5832-11ea-b094-69ad1750e029.e5c4f168.630x354o.db92d72d5bdf@2x.png" className="card-img-top" alt="bullet logo"/>
                            <div className="card-body">
                                <h5 className="card-title">Bullet</h5>
                                <p className = "card-text">Current Bullet Rating: {props.playerStats["chess_bullet"].last.rating}</p>
                                <p className = "card-text">Best Bullet Rating: {props.playerStats["chess_bullet"].best.rating}</p>
                                <p className = "card-text">Record: Wins {props.playerStats["chess_bullet"].record.win} Losses {props.playerStats["chess_bullet"].record.loss} Draws {props.playerStats["chess_bullet"].record.draw}</p> 
                            </div>
                        </div>
                    </div>
                </Row>
            </BootStrapContainer>
        </>
     
    )

}

export default PlayerStats;