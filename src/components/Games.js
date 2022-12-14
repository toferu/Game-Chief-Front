import {useState, useEffect} from 'react'



const Games = (props) => {
  // const [games, setGames] = useState({...props.games})
  const [show, setShow] = useState(false)

  const showToggle = () => {
    setShow(true)
  }
  
  return(
     <>
    <h3 onClick={() => showToggle}>{props.name}</h3>
     {props.map((li)=> {
      return (
        <>
       <p>{li.list.name}</p>
       <img src={li.list.background_image} alt="game cover"></img>
       <p>Metacritic: {li.list.metacritic}</p>
       {/* <p>Platform: {props.game.platform}</p> */}
       </> 
    )
  })}
    </>
 )}
 
 export default Games