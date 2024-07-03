import "./style/Game.css"

const Game = (props) => {

    /*
    
    On this page the only thing that needs doing is the props passed down to the elements. You might need to duplicated some of the p elements if you dont have enough
    for the details you need to include.
    I've also kept the img element incase you want to add an image

    */

    return (
        <>
            <div div className = "card-container col-lg-4 col-md-12 col-sm-12">
                <div className="card card-game">
                    {/* <img src="" className="card-img-top" alt="blitz logo"/> */}
                    <div className="card-body">
                        <h5 className="card-title">GAME TITLE</h5>
                        <p className = "card-text">FIRST PROP</p>
                        <p className = "card-text">SECOND PROP</p>
                        <p className = "card-text">THIRD PROP</p> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Game;