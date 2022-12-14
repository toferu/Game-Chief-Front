import axios from 'axios'
import {useState, useEffect} from 'react'

const Search = (props) => {
    const [api, setApi] = useState('https://api.rawg.io/api/games?key=bd22e2296caa4c9894e666410ee4945a')
    const [searchField, setSearchField] = useState('')
    const [gameData, setGameData] = useState([])
    const [resultArray, setResultArray] = useState([])
    const [hidden, setHidden] = useState(true)
    const [compoHider, setCompoHider] = useState(true)
    // const [hideRemoved, setHideRemoved] = useState(true)
    const [listName, setListName] = useState('')
   
//Search term concatenated to api url. Results added to gameData state   
    const newSearch = () => {

        axios.get(api + `&search=${searchField}`).then(res => setGameData(res.data.results))

    }
//This is important but I am too tired to remember what it does or how to describe it.
    const handleChange = (e) => {
        setSearchField(e.target.value)
       setHidden(true)
    }
//This does some heavy lifting. Games list and title are passed to db here.
    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleCreate({name: listName, list: resultArray})
        alert('Your list was submitted!')
        setCompoHider(false)
        console.log(resultArray)
        console.log(listName)
    }
//This readies the list title for the schema
    const handleListName = (e) => {
        setListName(e.target.value)
    }
    
//This works, it just doesn't update right away
    const handleRemove = (result) => {
        resultArray.splice(resultArray.indexOf(result), 1)
        // setHideRemoved(false)
        return null
    }
    
    
return (
    <section>
        <div>
            <h2>Create A Game List</h2>
{/* This is the name field, search field, & submit button */}
           { compoHider ? <><input 
            name='q' 
            type="search"
            placeholder="Search Games"
            onChange={handleChange}
            />
            <br/>
            <input type="submit" value='Search'
            onClick={newSearch}/> </>: null }
            <br/>
            <input 
            name='name' 
            type='text' 
            placeholder='name your list' 
            onChange={handleListName} />

        </div>
{/* Here's how the search results are displayed. The clicked title is pushed to an array. */}
        <>
            {hidden ? gameData.map((data) => {
                return(
                    <span>
                        <p onClick={ () => {
                        setResultArray(resultArray.concat([data]))
                        // console.log(resultArray)
                        setHidden(false)}}>
                        {data.name}</p>
                         
                    </span>
                )
            }): null}
        </>
{/* This is where selected titles are displayed. And there's a remove button */}
            <div>
            {resultArray.map((result) => {
            return(
                <ul>
                   <li>{result.name}</li>
                   <button onClick={() => {
                    handleRemove(result) }} value='Remove'>Remove</button>
                </ul>
            )
        })}
{/* Submit your list when you're ready */}
                <input type='submit' value='Submit' onClick={handleSubmit}/>
            </div>
    </section>
)    

}
export default Search

