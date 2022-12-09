import {useState, useEffect} from "react";

const Decision = (props) => {
    const [games, setGames] = useState({...props.games})
    const [genre, setGenre] = useState([])

    const randomGenre = () => {
        setGenre(games.genres[Math.floor(Math.random() * games.length)])
     }

useEffect(() => {
    randomGenre()
}, [])


     return (
        <>
        {genre.map((genre) =>{
            return (
                <>
                <p>{genre}</p>
                </>
            )
        } )}
        
        
        </>
     )
    
}
// random genre/tag compared to random genre/tag

// selected genre/tag spread in to array and becomes filter for next Response

// run an arbitray amount of Times

// pick one from array

// display 
// api {props.games.genre}.length ??

//  <button>{propssdfsd.games.tags}</button>

//  pick random number within array.length then go inside and pick a random genre 

// const allGenres = ['Action', 'Indie', 'Adventure', 'RPG', 'Strategy', 'Shooter', 'Casual', 'Simulation', 'Puzzle', 'Arcade', 'Platformer', 'Racing', 'Family', 'Board Games', 'Educational', 'Card']

// const randomGenre = (allGenres) => {
//    setGenre(allGenres[Math.floor(Math.random() * allGenres.length)])

// }

// const [genre, setGenre] = useState('')

// genre.map((genre) =>{
//     return (
//         <p>{genre}</p>
//     )
// })

// const newList = (randomGenre) => {
//     for (let i = 0; i < game.genre.length; i++) {
//         if (game.genre[i] == randomGenre) {
//             List.push(game)
//         }
//     }
// }
// const Decision = (props) => {
//     let looped = game.genre.map(genre) // gives us array of genres in the game
//     let newList = (games.filter((game) => {
//         return looped.child == randomGenre 
//     })) 
// }





// what do we want from decision? 

export default Decision