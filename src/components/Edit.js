import React,{useState, useEffect} from 'react'

const Edit = (props) => {
    const [games, setGames] = useState([...props.game])


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
                <label htmlFor='background_image'>Image:</label>
                <input type='text' name='background_image' onChange={handleChange}/>
                <br/>
                <br/>
                <label htmlFor='rating'>Rating:</label>
                <input type='text' name='rating' onChange={handleChange}/>
                <input type="submit" />
            </form>
        </details>

        </>
    )
}

export default Edit
