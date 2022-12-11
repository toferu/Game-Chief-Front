import {useState, useEffect} from 'react'
import axios from 'axios'

import Games from './components/Games'
import Add from './components/Add'
import Edit from './components/Edit'
import Decision from './components/Decisions'
import Search from './components/Search'

import './App.css';

const App = () => {

  const [games, setGames] = useState([])
  // const [gameGenre, setgameGenre] = useState()
  const [genre, setGenre] = useState('')
  


  // const allGenres = ['Action', 'Indie', 'Adventure', 'RPG', 'Strategy', 'Shooter', 'Casual', 'Simulation', 'Puzzle', 'Arcade', 'Platformer', 'Racing', 'Family', 'Board Games', 'Educational', 'Card']
  
//   const randomGenre = () => {
//     setGenre(allGenres[Math.floor(Math.random() * allGenres.length)])
//  }

  // const getGames = (res) => {
  //   // for (let i = 1; i <= 161; i ++) {
  //     axios.get(`http://localhost3000/games/seed`)
  //     .then(res => setGames(res.data.results), 
  //     (err) => console.log(err)).catch((error) => console.log(error))
  //   }
  

  
  // // const filtering = () => {
  // //   games.genre.includes(genre) ? 
  // // }
  

  // useEffect(() => {
  //   getGames()
  //   // randomGenre()
  // }, [])


//   return (

//     <div className="">

//       <h1>Game Chief</h1>
//       <p>{games.name}</p>

//       {games.map((game) => {
//         return (
//           <>
//           <Games key={game.id} games = {game}/>
//           </>
//         )
//       })}

//     </div>
//   );
// }

return (

  <div className="">

    <h1>Game Chief</h1>

      <Search />

  </div>
);
}

export default App;

