import {useState, useEffect} from 'react'



const Games = (props) => {
  const [listName, setListName] = useState([...props.game])
  const [games, setGames] = useState([...props.game.list])
  const [show, setShow] = useState(false)
console.log(games)

  const showToggle = () => {
    setShow(true)
  }

  
  return(
     <>
    <h3>{listName.name}</h3>
     {games.map((li)=> {
      return (
        <>
       <p>{li.name}</p>
       <img className="list-image" src={li.background_image} alt="game cover"></img>
       <p>Metacritic: {li.metacritic}</p>
       
       </> 
    )
  })}
    </>
 )}


 export default Games