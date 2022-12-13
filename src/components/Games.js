import {useState, useEffect} from 'react'



const Games = (props) => {
  return(
     <>
     
       <h3>Name: {props.game.name}</h3>
       <img src={props.game.image} alt="game cover"></img>
       <p>Genre: {props.game.genre}</p>
       <p>Platform: {props.game.platform}</p>
     </>
    )
 }
 
 export default Games