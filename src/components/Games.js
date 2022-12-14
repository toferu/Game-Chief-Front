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
     {/* {props.map((li)=> {
      return (
        <> */}
       <p>{props.list.name}</p>
       <img src={props.list.background_image} alt="game cover"></img>
       <p>Metacritic: {props.list.metacritic}</p>
       
       {/* </> 
    )
  })} */}
    </>
 )}

 export default Games