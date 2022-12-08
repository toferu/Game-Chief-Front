import {useState, useEffect} from 'react'
import axios from 'axios'

import Games from './components/Games'
import Add from './components/Add'
import Edit from './components/Edit'

import './App.css';

const App = () => {
  const [games, setGames] = useState([])

  const getGames = () => {
    axios.get('http://').then(res => setGames(res.data), 
    (err) => console.log(err)).catch((error) => console.log(error))
  }


  return (

    <div className="">

      <h1>Game Chief</h1>

      {games.map((game) => {
        return (
          <>
          <Games games = {game}/>
          </>
        )
      })}

    </div>
  );
}

export default App;

//not sure about line 28. Unclear if it's games = {game} or game = {games}