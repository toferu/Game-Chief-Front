import axios from 'axios'
import {useState} from 'react'

const Search = (props) => {
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

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleCreate(resultArray)
        console.log(resultArray)

    }


    const splice = (event) => {
        resultArray.splice(event, 1)
        //Trying to hide the text of the removed data
        event.target.value = null
        console.log(resultArray)
    }
return (
    <section>
        <div>
            <input name='q' 
            type="search"
            placeholder="Search Games"
            onChange={handleChange}
            />
            <input type="submit" value='Search'
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
                            {/* <input type='text' name='comment' placeholder='add a comment'/> */}
                            <button onClick={() => splice()} value='Remove'>Remove</button>
                        </ol>
                    )
                })} 
                <input type='submit' value='Submit' onClick={handleSubmit}/>
            </div>
    </section>
)    

}
export default Search

//the remove button functionality does not work yet