import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import ChessPlayerContainer from './containers/ChessPlayerContainer'

function App() {

  const router = createBrowserRouter(
    [
      {
        path: "/"
      }
    ]
  )


  return (
    <>

    <ChessPlayerContainer></ChessPlayerContainer>
    
    </>
     
  )
}

export default App
