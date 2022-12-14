import {useState, useEffect} from 'react'



const Games = (props) => {
  // const [games, setGames] = useState(props)
  const [show, setShow] = useState(false)
console.log(props)
  const showToggle = () => {
    setShow(true)
  }
  
  return(
     <>
    <h3 onClick={() => showToggle}>{props.name}</h3>
     {props.map((li)=> {
      return (
        <>
       <p>{li.name}</p>
       <img src={li.list.background_image} alt="game cover"></img>
       <p>Metacritic: {li.metacritic}</p>
       
       </> 
    )
  })}
    </>
 )}

 export default Games