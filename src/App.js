import {useState, useEffect} from 'react'
import axios from 'axios'

import Games from './components/Games'
import Add from './components/Add'
import Edit from './components/Edit'

import './App.css';

const App = () => {
  const [games, setGames] = useState([])

  const getGames = (res) => {
    axios.get("https://api.rawg.io/api/games?key=0fce8e91c7fa4616b4870ed4e6bfdcd8&page=10")
    .then(res => setGames(res.data.results), 
    (err) => console.log(err)).catch((error) => console.log(error))
  }

  useEffect(() => {
    getGames()
  }, [])

  return (

    <div className="">

      <h1>Game 3</h1>

      {games.map((game) => {
        return (
          <>
          <Games key={game.id} games = {game}/>
          </>
        )
      })}


    </div>
  );
}

export default App;

//not sure about line 28. Unclear if it's games = {game} or game = {games}