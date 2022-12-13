import {useState, useEffect} from 'react'
import axios from 'axios'

import Games from './components/Games'
import Add from './components/Add'
import Edit from './components/Edit'
import Decision from './components/Decisions'

import './App.css';

const App = () => {

  const [genre1, setgenre1] = useState('')
  const [genre2, setgenre2] = useState('')
  const [genre3, setgenre3] = useState('')
  const [tag1, setTag1] = useState('')
  const [tag2, setTag2] = useState('')
  const [tag3, setTag3] = useState('')

  const [api, setApi] = useState('https://api.rawg.io/api/games?key=bd22e2296caa4c9894e666410ee4945a&metacritic=75,100&page_size=40')
  const [max, setMax] = useState(15)
  const [allGenres, setAllGenre] = useState(['Action', 'Indie', 'Adventure', 'RPG', 'Strategy', 'Shooter', 'Casual', 'Simulation', 'Puzzle', 'Arcade', 'Platformer', 'Racing', 'Family', 'Board Games', 'Educational', 'Card'])
  const [stop, setStop] = useState(true)
  // tags
  const [gameCount, setGameCount] = useState('')
  const [pageRange, setPageRange] = useState('')

  const [selectedGenres, setSelectedGenres] = useState([])

  //CRUD
  const [games, setGames] =useState([])

  const getGames = () => {
    axios.get('http://localhost:3000/games')
    .then((response) => setGames(response.data), (err) => console.log(err))
    .catch((error) => console.log(error))
  }

  const handleCreate = (data) => {
    axios.post('http://localhost:3000/games', data)
     .then((response) => {
        console.log(response)
        setGames([...games, response.data])
     })
  }


  const generateRandomNumbers = (max) => {
    const randoms = []
    for (let i = 0; i < 3; i++) {
        randoms.push(Math.floor(Math.random() * (max - 1) + 1))
    }
    setgenre1(allGenres[randoms[0]])
    setgenre2(allGenres[randoms[1]])
    setgenre3(allGenres[randoms[2]])

    console.log(randoms)

  }

  const makeGenreButtons = () => {
    return (
      <>
        <button onClick={() => {
          // giving the new values to newaddress
          getNewAddress(genre1.toLowerCase());
          // storing what the user picked to selectedGenres
          setSelectedGenres([...selectedGenres, genre1])
          // taking out selected genre from allGenres so that user can't pick it again
          allGenres.splice((allGenres.indexOf(genre1)), 1);

          // reducing the max number we are generating random numbers from 
          setMax(allGenres.length - 1)
          // calling the random numbers function so that we can have new set of genres
          generateRandomNumbers(max)
          // calling the stop functions after we selected 3 genres
          stopFunction()
          
          console.log(selectedGenres)
          console.log(allGenres)
        }}>
          {genre1}
        </button>

        <button onClick={() => {
          getNewAddress(genre2.toLowerCase());
          setSelectedGenres([...selectedGenres, genre2])
          allGenres.splice((allGenres.indexOf(genre2)), 1)

          setMax(allGenres.length - 1)
          generateRandomNumbers(max)
          stopFunction()

          console.log(allGenres)
        }}>
          {genre2}
        </button>
        
        <button onClick={() => {
          getNewAddress(genre3.toLowerCase());
          setSelectedGenres([...selectedGenres, genre3])
          allGenres.splice((allGenres.indexOf(genre3)), 1)

          setMax(allGenres.length - 1)
          generateRandomNumbers(max)
          stopFunction()

          console.log(allGenres)
        }}>
          {genre3}
        </button>
      </>
    )
  }

  const getNewAddress = (genre) => {
    setApi(api + `&genres=${genre}`)
  }

  // once the buttons are gone, the api is used to get the number of games left in the selected genres. 
  const stopFunction = () => {
    if (allGenres.length < 14) {
      setStop(false)
      // getting the new api to set the gameCount to the number of games we narrowed it down to 
    }
  }
  // const randomTags = () => {
  //   randNums = []
  //   for (let i = 0; i < 3; i++) {
  //     while (!myArray[i]) {
  //       let newRandomInt = Math.floor(Math.random() * 40);
  //       if (!myArray.includes(newRandomInt)) {
  //         myArray.push(newRandomInt)
  //       }
  //     }
  //   }
  //   axios.get(api)
  //   .then((response) => {
  //     setTag1(res)
  //   })
  // }
// I have to generate 1 number for the page number and one number between 1 and 40. Do that 3 times

  // const getPageRange = () => {
  //   if (gameCount < 40) {
  //     setPageRange(gameCount) 
  //     console.log(pageRange)
  //   } else { 
  //     setPageRange(Math.floor((gameCount/40) - 1)) 
  //   }
  // }

  useEffect(() => {
    generateRandomNumbers(max)
    getGames()

  }, [])

  return (
    <div className="">
      <Add handleCreate = {handleCreate}/>
      <h1>Game Chief</h1>
       {stop ? makeGenreButtons() : null}
       {selectedGenres} <br/>
       {api} <br/>
       {gameCount} <br/>
       {pageRange}
       
    </div>
  );
}

export default App;