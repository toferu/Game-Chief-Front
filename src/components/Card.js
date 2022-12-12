//putting random pull logic tinkering here for now
import axios from 'axios'
import {useState, useEffect} from 'react'



const Lucky = () => {
    const [resData, setResData] = useState([])
    const [rndPage, setRndPage] = useState(10)
    const [rndGame, setRndGame] = useState(9)
    const [result, setResult] = useState('')
    

    const rndGet = () => {
        setRndPage(Math.floor(Math.random() * 4000))
        setRndGame(Math.floor(Math.random() * 19))
        axios.get ('https://api.rawg.io/api/games?key=bd22e2296caa4c9894e666410ee4945a' + `&page=${rndPage}`)
        .then(res => setResData(res.data.results))
        setResult(resData[rndGame].name)
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
            <p>{result}</p>
            </section>
    )

    
}



export default Lucky


