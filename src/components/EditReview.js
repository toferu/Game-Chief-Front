import React,{useState, useEffect} from 'react'

const EditReviews = (props) => {
    const [reviews, setReviews] = useState({...props.reviews})

    const handleChange = (event) => {
        setReviews({...reviews, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.editReviews(reviews)
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
                <label htmlFor='genre'>Platform:</label>
                <input type='text' name='platform' onChange={handleChange}/>
                <input type="submit" />
            </form>
        </details>

        </>
    )
}

export default EditReviews
