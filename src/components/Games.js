import {useState, useEffect} from 'react'



const Games = (props) => {
  // const [games, setGames] = useState({...props.games})
  const [show, setShow] = useState(false)
  
  return(
     <>
    <h3 onClick={() => setShow(true)}>{props.name}</h3>
     {show ? props.map((li)=> {
      return (
        <>
       <p>{li.list.name}</p>
       <img src={li.list.background_image} alt="game cover"></img>
       <p>Metacritic: {li.list.metacritic}</p>
       {/* <p>Platform: {props.game.platform}</p> */}
      </> 
    )
  }) : null }
    </>
 )}
 
 export default Games