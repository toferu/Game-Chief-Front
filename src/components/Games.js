const Games = (props) => {
    return(
     <>
       <h3>Name: {props.games.name}</h3>
       <img src={props.games.Image} alt="game cover"></img>
       <p>Genre: {props.games.Tags}</p>
       <p>Platform: {props.games.platform}</p>
     </>
    )
 }
 
 export default Games