import axios from 'axios'
import {useState} from 'react'



const Search = () => {
    const [api, setApi] = useState('https://api.rawg.io/api/games?key=bd22e2296caa4c9894e666410ee4945a')
    const [searchField, setSearchField] = useState('')
    const [data, setData] = useState([])

    const newSearch = () => {

        axios.get(api).then(res => setData(res.data.results))

    }

    const handleChange = async (e) => {
        setSearchField(e.target.value)
        setApi(api + `&search=${searchField}`)

    }
//have to change the onchange to an onCLick
return (
    <section>
        <div>
            <input name='q' 
            type="text"
            placeholder="Search Games"
            onChange={handleChange}
            />
            <input type="submit"
            onClick={newSearch}/>
        </div>

        <>
            {data.map((data) => {
                return(
                    <span><p>Name: {data.name}</p></span>
                )
            })}
            </>
     
    </section>
)    

}

export default Search