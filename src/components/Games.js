import {useState, useEffect} from 'react'



const Games = (props) => {
  const [games, setGames] = useState({...props})
  const [show, setShow] = useState(false)
console.log(games.list)

  // const funkyArray = () => {
  //   setGames(games.list)
  // }
  const showToggle = () => {
    setShow(true)
  }
  
//   return(
//      <>
//     <h3 onClick={() => showToggle}>{games.name}</h3>
//      {props.map((li)=> {
//       return (
//         <>
//        <p>{props.name}</p>
//        <img src={props.background_image} alt="game cover"></img>
//        <p>Metacritic: {props.metacritic}</p>
       
//        </> 
//     )
//   })}
//     </>
//  )}
}

 export default Games