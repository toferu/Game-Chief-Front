import {useState, useEffect} from 'react'
import axios from 'axios'

import Games from './components/Games'
import Add from './components/Add'
import Picking from './components/Picking'
import Edit from './components/Edit'
// import Decision from './components/Decisions'
import Search from './components/Search'
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
  const handleEdit = (data) => {
    axios.put('http://localhost:3000/games/' + data._id, data)
    .then((response) => {
       console.log(response)
       let newGames = (games.map((game) => {
        return game._id !== data._id ? game : data
       }))
       setGames(newGames)
    })
 }
 const handleDelete = (deletedGame) => {
  axios.delete('http://localhost:3000/games/' + deletedGame._id)
  .then((response) => {
   let newGames = games.filter((game) => {
     return game._id !== response._id
    })
   setGames(newGames)
   getGames()
  })
}


  useEffect(() => {
    getGames()

  }, [])

  return (
    <div className="">
      {/* <Add handleCreate = {handleCreate}/>
      {games.map((game) => {
        return (
          <>
            <Games game = {game}/>
          </>
        )
      })} */}
      <h1>Game Chief</h1>
      <button onClick={() => setDisplay(!display)}> Find your perfect game</button>
      {display ? <Picking/> : null}
      <h3> Or</h3>
       <h4 onClick={() => setDisplay(!display)} >Create Your Own Recommendation List</h4>
      {display ?  <Search /> : null}
    </div>
  );
}

export default App;