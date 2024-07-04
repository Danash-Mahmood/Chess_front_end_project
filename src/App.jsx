import { useState } from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ChessPlayerContainer from './containers/ChessPlayerContainer'
import Navbar from './components/Navbar'
import PlayerStats from './components/PlayerStats'
import PlayerGames from './components/PlayerGames'
import './App.css'

function App() {
  const [player ,  setPlayer] = useState({});
  const [playerGames , setPlayerGames] = useState({});
  const [playerCountry , setCountry] = useState({});
  const [playerStats , setStats] = useState({});
  const [lastMonthGames,setLastMonthsGames] = useState({});


  const handleSearchPlayer = (playerData, playerGames, playerCountry, playerStats,lastMonthGames) => {
    setPlayer(playerData);
    setPlayerGames(playerGames);
    setCountry(playerCountry);
    setStats(playerStats);
    setLastMonthsGames(lastMonthGames);
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
            element: <PlayerStats playerStats = {playerStats} playerUserName = {player.username}/>
          },
          {
            path: "/playergames",
            element: <PlayerGames playerGames = {playerGames} playerUserName = {player.username} lastMonthGames = {lastMonthGames}/>
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
