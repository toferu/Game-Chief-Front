import React,{useState, useEffect} from 'react'

const Edit = (props) => {
    const [games, setGames] = useState({...props.game})
    console.log(games)

    const handleChange = (event) => {
        setGames({...games, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        JSON.parse(games)
        console.log(JSON.parse(games))
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
                {/* <label htmlFor='image'>Image:</label>
                <input type='text' name='image' onChange={handleChange}/>
                <br/>
                <br/>
                <label htmlFor='genre'>Genre:</label>
                <input type='text' name='genre' onChange={handleChange}/> */}
                <input type="submit" />
            </form>
        </details>

        </>
    )
}

export default Edit
