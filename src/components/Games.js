import {useState, useEffect} from 'react'



const Games = (props) => {
    

  
  
  return(
     <>

       <h3>Name: {props.games.name}</h3>
       {/* <img src={props.games.background_image} alt="game cover"></img> */}
       {/* <p>Genre: {props.games.genres[0].name}</p> */}
       <p>Platform: {props.games.platform}</p>
     </>
    )
 }
 
 export default Games