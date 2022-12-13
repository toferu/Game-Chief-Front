//putting random pull logic tinkering here for now
import axios from 'axios'
import {useState, useEffect} from 'react'



const Lucky = () => {
    const [resData, setResData] = useState([{}])
    const [rndPage, setRndPage] = useState(0)
    const [rndGame, setRndGame] = useState(4)
    const [result, setResult] = useState('')
    

    const rndGet = () => {
        setRndPage(Math.floor(Math.random() * 4000))
        setRndGame(Math.floor(Math.random() * 19))
        axios.get('https://api.rawg.io/api/games?key=bd22e2296caa4c9894e666410ee4945a' + `&page=${rndPage}`)
        .this (res => setResData(res.data.results))
        setResult(resData[rndGame])
        console.log(rndPage)
        console.log(rndGame)
        console.log(result)

    } 

    // useEffect (() => {
    //     rndGet()
    // }, [])

    return (
        <section>
            <button onClick={() => rndGet()}>I'm Feeling Lucky</button>
            <p>{result.name}</p>
            <img className='lucky-image' src={result.background_image}></img>

           
        </section>
    )

    
}



export default Lucky


