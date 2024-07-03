import { useState } from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ChessPlayerContainer from './containers/ChessPlayerContainer'
import Navbar from './components/Navbar'
import PlayerStats from './components/PlayerStats'
import PlayerGames from './components/PlayerGames'
import './App.css'

function App() {
  const [player ,  setPlayer] = useState({});
  const [playerGames , setPlayerGames] = useState([]);
  const [playerCountry , setCountry] = useState({});

  const handleSearchPlayer = (playerData, playerGames, playerCountry) => {
    setPlayer(playerData);
    setPlayerGames(playerGames);
    setCountry(playerCountry);
  }

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Navbar />,
        children: [
          {
            path: "/",
            element: <ChessPlayerContainer onSearchPlayer = {handleSearchPlayer} playerData = {player} playerCountry = {playerCountry}/>
          },
          {
            path: "/playerstats",
            element: <PlayerStats />
          },
          {
            path: "/playergames",
            element: <PlayerGames />
          }
        ]
      }
    ]
  )

  return (
    <>

      <RouterProvider router = { router }/>
    
    </>
     
  )
}

export default App
