import {useState, useEffect} from 'react'
import axios from 'axios'

import Games from './components/Games'
import Add from './components/Add'
import Edit from './components/Edit'

import './App.css';

const App = () => {

  const [games, setGames] = useState([])
  // const [gameGenre, setgameGenre] = useState()
  const [genre, setGenre] = useState('')
  


  const allGenres = ['Action', 'Indie', 'Adventure', 'RPG', 'Strategy', 'Shooter', 'Casual', 'Simulation', 'Puzzle', 'Arcade', 'Platformer', 'Racing', 'Family', 'Board Games', 'Educational', 'Card']
  
  const randomGenre = () => {
    setGenre(allGenres[Math.floor(Math.random() * allGenres.length)])
 }


  const getGames = (res) => {
    axios.get("https://api.rawg.io/api/games?key=0fce8e91c7fa4616b4870ed4e6bfdcd8&page=10")
    .then(res => setGames(res.data.results), 
    (err) => console.log(err)).catch((error) => console.log(error))
  }

  // const filtering = () => {
  //   games.genre.includes(genre) ? 
  // }
  

  useEffect(() => {
    getGames()
    randomGenre()
  }, [])


  return (

    <div className="">

      <h1>Game Chief</h1>
      <p>{genre}</p>
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

