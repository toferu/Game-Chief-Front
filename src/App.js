import {useState, useEffect} from 'react'
import axios from 'axios'

import Games from './components/Games'
import Add from './components/Add'
import Picking from './components/Picking'
import Edit from './components/Edit'
// import Decision from './components/Decisions'
import Search from './components/Search'
import Reviews from './components/Reviews'
import './App.css';

const App = () => {

  //CRUD
  const [games, setGames] = useState([])
  const [reviews, setReviews] = useState([])
  
  const [displayPicking, setDisplayPicking] = useState(false)
  // states for displaying the components of the nav bar
  const [submit, setSubmit] = useState(false)
  const [list, setList] =useState(false)
  const [findGame, setFindGame] = useState(false)
  const [search, setSearch] = useState(false)
  const [searchDisplay, setSearchDisplay] = useState(false)

//game schema routes
  const getGames = () => {
    axios.get('https://gamechief-back.herokuapp.com/games')
    .then((response) => setGames(response.data), (err) => console.log(err))
    .catch((error) => console.log(error))
  }

  const handleCreate = (data) => {
    axios.post('https://gamechief-back.herokuapp.com/games', data)
     .then((response) => {
        console.log(response)
        setGames([...games, response.data])
     })
  }

  const handleEdit = (data) => {
    axios.put('https://gamechief-back.herokuapp.com/games/' + data._id, data)
    .then((response) => {
       console.log(response)
      //  let newGames = (games.map((game) => {
      //   return game._id !== data._id ? game : data
      //  }))
      //  setGames(newGames)
      getGames()
    })
 }

 const handleDelete = (deletedGame) => {
  axios.delete('https://gamechief-back.herokuapp.com/games/' + deletedGame._id)
  .then((response) => {
   let newGames = games.filter((game) => {
     return game._id !== response._id
    })
   setGames(newGames)
   getGames()
  })
}

//review schema routes

const getReviews = () => {
  axios.get('https://gamechief-back.herokuapp.com/reviews')
  .then((response) => setReviews(response.data), (err) => console.log(err))
  .catch((error) => console.log(error))
}

const createReviews = (data) => {
  axios.post('https://gamechief-back.herokuapp.com/reviews', data)
   .then((response) => {
      console.log(response)
      setReviews([...reviews, response.data])
   })
}

const editReviews = (data) => {
  axios.put('https://gamechief-back.herokuapp.com/reviews/' + data._id, data)
  .then((response) => {
     console.log(response)
     let newGameReviews = (reviews.map((review) => {
      return review._id !== data._id ? review : data
     }))
     setReviews(newGameReviews)
  })
}

const deleteReviews = (deletedReview) => {
  axios.delete('https://gamechief-back.herokuapp.com/reviews/' + deletedReview._id)
  .then((response) => {
   let newGameReviews = reviews.filter((review) => {
     return review._id !== response._id
    })
   setReviews(newGameReviews)
   getReviews()
  })
}

  const viewSubmit = () => {
    setSubmit(true)
    setList(false)
    setFindGame(false)
    setSearch(false)
  }

  const viewList = () => {
    setSubmit(false)
    setList(true)
    setFindGame(false)
    setSearch(false)
  }

  const viewFindGame = () => {
    setSubmit(false)
    setList(false)
    setFindGame(true)
    setSearch(false)
  }

  const viewSearch = () => {
    setSubmit(false)
    setList(false)
    setFindGame(false)
    setSearch(true)
  }

  useEffect(() => {
    getGames()
    getReviews()

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
          <div onClick={viewSearch}className='nav-link'>Search your game</div>
        </li>
      </div>

        {list ?
          <div>

          {games.map((game) => {
            return (
              <>
                <Games key={game._id} game = {game}/>
                <Edit handleEdit={handleEdit} game = {game} />
                <button onClick={() => {handleDelete(game)}}>Delete</button>
              </>
            )
          })}
          </div>
        : null}

        {submit ?
          <div>
            <Add createReviews = {createReviews}/>
            {reviews.map((review) => {
              return(
                <>

                  <Reviews reviews={review}/>
                  <editReviews reviews={review} editReviews={editReviews}/>
                  <button onClick={() => {deleteReviews(review)}}>Delete</button>
                </>
              )
            })}
            
          </div>
        : null}

        {findGame ?
          <div className='text-center'> <br/> <br/>
            
            <button className='btn btn-primary mb-50' onClick={() => setDisplayPicking(!displayPicking)}> Find your perfect game!</button> <br/>
            {displayPicking ? <Picking/> : null}
          </div>
        : null}

        
        {search ? 
          <div>
            <h4 onClick={() => setSearchDisplay(!searchDisplay)}> Create Your Own Recommendation List</h4>
            {searchDisplay ?  <Search handleCreate = {handleCreate}/> : null}
          </div>
        
        : null }

    </div>
  );
}

export default App;