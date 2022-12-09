import {useState, useEffect} from 'react'
import axios from 'axios'

import Games from './components/Games'
import Add from './components/Add'
import Edit from './components/Edit'
import Decision from './components/Decisions'

import './App.css';

const App = () => {

<<<<<<< HEAD
  const getGames = () => {
    axios.get('http://gamechief.herokuapp.com/games').then(res => setGames(res.data), 
    (err) => console.log(err)).catch((error) => console.log(error))
  }

const handleCreate = (data) => {
  axios.post('http://gamechief.herokuapp.com/games', data).then((res) =>{
    console.log(res)
    setGames([...games, res.data])
  })
}
  useEffect(() => {
    getGames()
  }, [])
=======
  const [games, setGames] = useState([])
  // const [gameGenre, setgameGenre] = useState()
  const [genre, setGenre] = useState('')
  


  // const allGenres = ['Action', 'Indie', 'Adventure', 'RPG', 'Strategy', 'Shooter', 'Casual', 'Simulation', 'Puzzle', 'Arcade', 'Platformer', 'Racing', 'Family', 'Board Games', 'Educational', 'Card']
  
//   const randomGenre = () => {
//     setGenre(allGenres[Math.floor(Math.random() * allGenres.length)])
//  }

  const getGames = (res) => {
    for (let i = 1; i <= 161; i ++) {
      axios.get(`https://api.rawg.io/api/games?key=bd22e2296caa4c9894e666410ee4945a&metacritic=75,100&page=${i}&genres=shooter&tags=comedy&tags=looter-shooter&platform=4&dates=2018-01-01,2022-12-31`)
      .then(res => setGames(res.data.results), 
      (err) => console.log(err)).catch((error) => console.log(error))
    }
  }

  
  // const filtering = () => {
  //   games.genre.includes(genre) ? 
  // }
  

  useEffect(() => {
    getGames()
    // randomGenre()
  }, [])

>>>>>>> e8867f051a803e6f8904c5738a549f651322c931

  return (

    <div className="">

      <h1>Game Chief</h1>
      <p>{games.name}</p>
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

