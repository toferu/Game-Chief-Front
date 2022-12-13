import axios from 'axios'
import {useState} from 'react'

const Search = () => {
    const [api, setApi] = useState('https://api.rawg.io/api/games?key=bd22e2296caa4c9894e666410ee4945a')
    const [searchField, setSearchField] = useState('')
    const [gameData, setGameData] = useState([])
    const [resultArray, setResultArray] = useState([])
    const [hidden, setHidden] = useState(true)
   
   
    const newSearch = () => {

        axios.get(api + `&search=${searchField}`).then(res => setGameData(res.data.results))

    }

    const handleChange = (e) => {
        setSearchField(e.target.value)
       setHidden(true)

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
            {hidden ? gameData.map((data) => {
                return(
                    <span>
                        {<p onClick={ event => {
                        setResultArray(resultArray.concat([data]))
                        setHidden(false)}
                        }>
                        {data.name}</p>
                        } 
                    </span>
                )
            }): null}
        </>

            <div>
                {resultArray.map((result) => {
                    return(
                        <ol>
                            <li>{result.name}</li>
                            <input type='text' name='comment' placeholder='add a comment'/>
                            <input type='submit' name='Submit List'/>
                        </ol>
                    )
                })}
            </div>
    </section>
)    

}
export default Search