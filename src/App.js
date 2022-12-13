import {useState, useEffect} from 'react'
import axios from 'axios'

import Games from './components/Games'
import Add from './components/Add'
import Edit from './components/Edit'
import Decision from './components/Decisions'
import Search from './components/Search'
import Lucky from './components/Card'

import './App.css';

const App = () => {

  const [games, setGames] = useState([])

  
  

  const getGames = () => {
      axios.get(`http://localhost:3000`)
      .then(res => setGames(res.data), 
      (err) => console.log(err))
      .catch((error) => console.log(error))
    }

  const handleCreate = (data) => {
    axios.post('http://localhost:3000/games', data)
      .then((res)=> {
      console.log(res)
      setGames([...games, res.data])
      console.log(res.data)
      // getGames()
    })
  }

  
  

  useEffect(() => {
    getGames()
    // randomGenre()
  }, [])



return (

  <div className="">

    <h1>Game Chief</h1>
    <Add handleCreate={handleCreate}/>
      <Search />
      <Lucky />
      
  </div>
);
}

export default App;

