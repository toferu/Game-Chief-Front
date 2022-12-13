import {useState} from 'react'

const Add = (props) => {
   const [games, setGames] = useState({name: '', image: '', genre: '', platform: ''})

   const handleChange = (event) => {
    setGames({...games, [event.target.name]: event.target.value})
   }

   const handleSubmit = (event) => {
      event.preventDefault()
      props.handleCreate(games)
   }

   return(
    <>
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
        <label htmlFor='platform'>Platform:</label>
        <input type='text' name='platform' onChange={handleChange}/>
        <br/>
        <input type="submit"/>
      </form>
    </>
   )
}

export default Add
