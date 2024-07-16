
import React from 'react'
import './item.css'
export default function item(props) {
  return (
    <div className='item'>
         <img src={props.image} alt="" />
         <p style={{color:"white",fontSize:"20px",fontWeight:"bold",textAlign:"center"}}>{props.name}</p>
        <p style={{color:"gray",fontSize:"13px",textAlign:"center",paddingTop:"10px"}}>{props.about}</p>
    </div>
  )
}
