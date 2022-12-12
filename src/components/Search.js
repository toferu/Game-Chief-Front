import axios from 'axios'
import {useState} from 'react'

const Search = () => {
    const [api, setApi] = useState('https://api.rawg.io/api/games?key=bd22e2296caa4c9894e666410ee4945a')
    const [searchField, setSearchField] = useState('')
    const [gameData, setGameData] = useState([])
    const [resultArray, setResultArray] = useState([])
    const newSearch = () => {

        axios.get(api + `&search=${searchField}`).then(res => setGameData(res.data.results))

    }

    const handleChange = (e) => {
        setSearchField(e.target.value)
       

    }
return (
    <section>
        <div>
            <input name='q' 
            type="search"
            placeholder="Search Games"
            onChange={handleChange}
            />
            <input type="submit"
            onClick={newSearch}/>
        </div>

        <>
            {gameData.map((data) => {
                return(
                    <span><p onClick={() => {setResultArray(resultArray.concat([data]))}}>{data.name}</p><br/></span>
                )
            })}
        </>

    </section>
)    

}
export default Search