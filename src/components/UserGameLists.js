import { useState, useEffect } from "react";
import axios from "axios";


const UserList = (props) => {
    const [list, setList] = useState({...props.list})
    console.log(list)
    // const getList = () => {    
    // axios.get('http://localhost3000/games')
    // .then(res => setList(res.data), 
    // (err) => console.log(err))
    // .catch((error) => console.log(error))
    // }





    // useEffect (() => {
    //     getList()

    // }, [])

    return (

        <>
            {list.map((li) => {
                return (
                    <>
                    <p>{li}</p>
                    <img src={li.background_image}></img>
                    <p>{li.metacritic}</p>
                    </>
                )

            })}
        </>


    )

}

export default UserList