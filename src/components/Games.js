import {useState, useEffect} from 'react'



const Games = (props) => {
  const [games, setGames] = useState({...props.games})
  const [show, setShow] = useState(false)
console.log(games)

  // const funkyArray = () => {
  //   setGames(games.list)
  // }
  const showToggle = () => {
    setShow(true)
  }
  
  return(
     <>
    <h3 onClick={() => showToggle}>{games.name}</h3>
     {games.map(({name, background_image, metacritic})=> {
      return (
        <>
       <p>{name}</p>
       <img src={background_image} alt="game cover"></img>
       <p>Metacritic: {metacritic}</p>
       
       </> 
    )
  })}
    </>
 )}


 export default Games