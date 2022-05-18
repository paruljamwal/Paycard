import React from 'react'
import './card.css'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
const Card = ({color,date,logo,name,scheme,mobile}) => {
  return (
    <div className='box' style={{background:color}}>
  
     <div className='mid'>

     

        <div className='header'>
            <div>{date}</div>
            <div>{logo}</div>
   </div>
            <button className='btn'>Case Study</button>
            <h1>{name}</h1>
            <h2>{scheme}</h2>
            <div className='footer'>
                <div> <p>{mobile}</p></div>
                <div><HiOutlineArrowNarrowRight/></div>
            </div>
           
            </div>
    </div>
  )
}

export default Card