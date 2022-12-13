import {useState, useEffect} from 'react'
import axios from 'axios'

import Games from './components/Games'
import Add from './components/Add'
import Picking from './components/Picking'
import Edit from './components/Edit'
import Decision from './components/Decisions'
import Search from './components/Search'
import Lucky from './components/Card'
import UserList from './components/UserGameLists'

import './App.css';

const App = () => {


  

  //CRUD
  const [games, setGames] =useState([])
  const [display, setDisplay] = useState(false)

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


  useEffect(() => {
    getGames()

  }, [])



return (

  <div className="">

    <h1>Game Chief</h1>
    <h3>Curated Lists</h3>
    {/* <div className="card-grid">
        {games.map((games)=>{


          return (
            <Games key={games.id} games={games} />
          )
    <h1>Game Chief</h1>
          <button onClick={() => setDisplay(!display)}> Find your perfect game</button>
          {display ? <Picking/> : null}

        })}
        </div> */}
    {/* <button onClick={<Add handleCreate={handleCreate}/>}>Add A Game</button> */}
      <Search handleCreate={handleCreate}/>
      {/* <Lucky />*/}
      
  </div>
);

}

export default App;