import {useState, useEffect} from 'react'



const Reviews = (props) => {

  return(
    <>
        {props.review.name}
        <img src={props.review.image}/>
        {props.review.genre}
        {props.review.platform}
    </>

  )}



 export default Reviews