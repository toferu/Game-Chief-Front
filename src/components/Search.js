import axios from 'axios'
import {useState, useEffect} from 'react'

const Search = (props) => {
    const [api, setApi] = useState('https://api.rawg.io/api/games?key=bd22e2296caa4c9894e666410ee4945a')
    const [searchField, setSearchField] = useState('')
    const [gameData, setGameData] = useState([])
    const [resultArray, setResultArray] = useState([])
    const [hidden, setHidden] = useState(true)
    const [hideRemoved, setHideRemoved] = useState(true)
   
   
    const newSearch = () => {

        axios.get(api + `&search=${searchField}`).then(res => setGameData(res.data.results))

    }

    const handleChange = (e) => {
        setSearchField(e.target.value)
       setHidden(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleCreate({list: resultArray})
        alert('Your list was submitted!')
        console.log(resultArray)

    }

    // const list = () => {
    //     resultArray.map((result) => {
    //         return(
    //             <ol>
    //                 <li>{result.name}</li>
    //                 {/* <input type='text' name='comment' placeholder='add a comment'/> */}
    //                 <button onClick={() => {
    //                 handleRemove(result) }} value='Remove'>Remove</button>
    //             </ol>
    //         )
    //     })
    // }

    const handleRemove = (result) => {
        resultArray.splice(resultArray.indexOf(result), 1)
        // list()
    }
    
    // const splice = (index) => {
    //     resultArray.splice(index, 1)
    //     console.log(resultArray)
    // }
    // useEffect(() => {
    //     list()
    // }, [])
    
return (
    <section>
        <div>
            <h2>Create A Game List</h2>
            <input 
            name='q' 
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
                        {<p onClick={ () => {
                        setResultArray(resultArray.concat([data]))
                        console.log(resultArray)
                        // list()
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
                    <button onClick={() => {
                    handleRemove(result) }} value='Remove'>Remove</button>
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