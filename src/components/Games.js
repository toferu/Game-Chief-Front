import {useState, useEffect} from 'react'



const Games = (props) => {
  const [listName, setListName] = useState({...props})
  const [games, setGames] = useState([...props.game.list])
  const [show, setShow] = useState(false)
console.log(games)

  // const funkyArray = () => {
  //   setGames(games.list)
  // }
  const showToggle = () => {
    setShow(true)
  }

  // useEffect(() => {
  //   funkyArray()
  // }, [])
  
  return(
     <>
    <h3 onClick={() => showToggle()}>{listName.name}</h3>
     {games.map((li)=> {
      return (
        <>
       <p>{li.name}</p>
       <img src={li.background_image} alt="game cover"></img>
       <p>Metacritic: {li.metacritic}</p>
       
       </> 
    )
  })}
    </>
 )}


 export default Games