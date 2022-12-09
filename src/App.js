import {useState, useEffect} from 'react'
import axios from 'axios'

import Games from './components/Games'
import Add from './components/Add'
import Edit from './components/Edit'
import Decision from './components/Decisions'

import './App.css';

const App = () => {

  const [games, setGames] = useState([])
  const [genre1, setgenre1] = useState('')
  const [genre2, setgenre2] = useState('')
  const [genre3, setgenre3] = useState('')
  const [choice1, setChoice1] = useState(true)
  const [choice2, setChoice2] = useState(false)
  const [api, setApi] = useState('https://api.rawg.io/api/games?key=bd22e2296caa4c9894e666410ee4945a&metacritic=75,100&page_size=40')
  
  
  const allGenres = ['Action', 'Indie', 'Adventure', 'RPG', 'Strategy', 'Shooter', 'Casual', 'Simulation', 'Puzzle', 'Arcade', 'Platformer', 'Racing', 'Family', 'Board Games', 'Educational', 'Card']
  // const getGames = (res) => {
  //   for (let i = 1; i <= 5; i ++) {
  //     axios.get(api)
  //     .then(res => setGames(res.data.results), 
  //     (err) => console.log(err)).catch((error) => console.log(error))
  //   }
  // }

  const generateRandomNumbers = () => {
    const randoms = []
    for (let i = 0; i < 3; i++) {
        randoms.push(Math.floor(Math.random() * (16 - 1) + 1))
    }
    setgenre1(allGenres[randoms[0]])
    setgenre2(allGenres[randoms[1]])
    setgenre3(allGenres[randoms[2]])
  }

  console.log(allGenres)
  const makeButtons = () => {
    return (
      <>
        <button onClick={() => {
          getNewAddress(genre1.toLowerCase());
          allGenres.splice((allGenres.indexOf(genre1)), 1);
          console.log(allGenres.indexOf(genre1))
          console.log(typeof(genre1))
        }}>
          {genre1}
        </button>
        <button onClick={() => {
          getNewAddress(genre2.toLowerCase());
          allGenres.splice((allGenres.indexOf(genre2)), 1)
        }}>
          {genre2}
        </button>
        <button onClick={() => {
          getNewAddress(genre3.toLowerCase());
          allGenres.splice((allGenres.indexOf(genre3)), 1)
        }}>
          {genre3}
        </button>
      </>
    )
  }
  
  const spliceFunction = (index) => {
    allGenres.splice(index, 1)
  }


  const getNewAddress = (genre) => {
    setApi(api + `&genres=${genre}`)
    setChoice1(false)
    setChoice2(true)
  }
  

  useEffect(() => {
    generateRandomNumbers()
  }, [])

  return (

    <div className="">
      {choice1 ? makeButtons() : null}
      <h1>Game Chief</h1>
    </div>
  );
}

export default App;

