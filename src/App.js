import {useState, useEffect} from 'react'
import axios from 'axios'

import Games from './components/Games'
import Add from './components/Add'
import Picking from './components/Picking'
import Edit from './components/Edit'
import Decision from './components/Decisions'

import './App.css';

const App = () => {

  //CRUD
  const [games, setGames] =useState([])
  
  const [displayPicking, setDisplayPicking] = useState(false)
  const [submit, setSubmit] = useState(false)
  const [list, setList] =useState(false)
  const [findGame, setFindGame] = useState(false)


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

  const viewSubmit = () => {
    setSubmit(true)
    setList(false)
    setFindGame(false)
  }

  const viewList = () => {
    setSubmit(false)
    setList(true)
    setFindGame(false)
  }

  const viewFindGame = () => {
    setSubmit(false)
    setList(false)
    setFindGame(true)
  }

  useEffect(() => {
    getGames()

  }, [])

  return (
    <div className="">


      <h1 className='text-center'> Game Chief </h1>
      <div className="nav justify-content-center">
        <li className="nav-item">
          <div onClick={viewSubmit}className='nav-link'>Submit Games</div>
        </li>
        <li className="nav-item">
          <div onClick={viewList}className='nav-link'>Your Games List</div>
        </li>
        <li className="nav-item"> 
          <div onClick={viewFindGame}className='nav-link'>Find Your Game</div>
        </li>
        <li className="nav-item">
          <div className='nav-link'>Last one</div>
        </li>
      </div>


        {list ?
          <div>

          {games.map((game) => {
            return (
              <>
                <Games game = {game}/>
              </>
            )
          })}
          </div>
        : null}

        {submit ?
          <div>
            <Add handleCreate = {handleCreate}/>
          </div>
        : null}

        {findGame ?
          <div className='text-center'> <br/> <br/>
            
            <button className='btn btn-primary mb-50' onClick={() => setDisplayPicking(!displayPicking)}> Find your perfect game!</button> <br/>
            {displayPicking ? <Picking/> : null}
       
          </div>
        : null}


    </div>
  );
}

export default App;