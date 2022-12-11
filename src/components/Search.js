import axios from 'axios'
import {useState} from 'react'



const Search = () => {
    const [api, setApi] = useState('https://api.rawg.io/api/games?key=bd22e2296caa4c9894e666410ee4945a')
    const [searchField, setSearchField] = useState('')
    const [data, setData] = useState([])

    const newSearch = async (searchField) => {
        setApi(api + `&search=${searchField}`)
        axios.get(api).then(res => res.data.results)
        setData(res.data.results)
        return (
            <>
            {data.map((data) => {
                return(
                    <span>{data.name}</span>
                )
            })}
            </>
        )
    }

    const handleChange = (e) => {
        setSearchField(e.target.value)
        newSearch()
    }

return (
    <section>
        <div>
            <input name='q' 
            type="search"
            placeholder="Search Games"
            onChange={handleChange}
            />
        </div>

     
    </section>
)    

}

export default Search