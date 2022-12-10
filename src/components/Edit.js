import React,{useState} from 'react'

const Edit = (props) => {
    const [games, setGames] = useState({...props.games})

    const handleChange = (event) => {
        setGames({...games, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleEdit(games)
    }


    return(
        <>
        <details>
            <summary>Edit</summary>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' onChange={handleChange}/>
                <br/>
                <br/>
                <label htmlFor='image'>Image:</label>
                <input type='text' name='image' onChange={handleChange}/>
                <br/>
                <br/>
                <label htmlFor='genre'>Genre:</label>
                <input type='text' name='genre' onChange={handleChange}/>
                <br/>
                <br/>
                <label htmlFor='rating'>Rating:</label>
                <input type='text' name='rating' onChange={handleChange}/>
                <br/>
                <br/>
                <label htmlFor='Review'>Review:</label>
                <input type='text' name='review' onChange={handleChange}/>
                <input type="submit" />
            </form>
        </details>

        </>
    )
}

export default Edit
