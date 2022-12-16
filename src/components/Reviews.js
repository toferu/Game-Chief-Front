import {useState, useEffect} from 'react'



const Reviews = (props) => {

  return(
    <>
        {props.reviews.name}
        <img src={props.reviews.image}/>
        {props.reviews.genre}
        {props.reviews.platform}
    </>

  )}



 export default Reviews