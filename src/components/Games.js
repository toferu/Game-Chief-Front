import {useState, useEffect} from 'react'



const Games = (props) => {
  const [games, setGames] = useState({...props.games})
  const [show, setShow] = useState(false)
console.log(games)
  const showToggle = () => {
    setShow(true)
  }
  
//   return(
//      <>
//     <h3 onClick={() => showToggle}>{games.name}</h3>
//      {games.list.map((li)=> {
//       return (
//         <>
//        <p>{li.name}</p>
//        <img src={li.background_image} alt="game cover"></img>
//        <p>Metacritic: {li.metacritic}</p>
       
//        </> 
//     )
//   })}
//     </>
//  )}
}
 export default Games