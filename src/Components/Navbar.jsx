import React, { useState } from 'react'
import logo from '../Components/Assets/logo.png'
import { Link } from 'react-router-dom'
export default function Navbar() {
    let [menu,setMenu]=useState("Home")
  return (
    <div>
        <div className='navbar'>
     <img onClick={()=>{setMenu("logo")}} src={logo } alt="" />
        <ul>
            <li onClick={()=>{setMenu("Store")}}> <Link  style={{textDecoration:"none",color:"white",fontWeight:"bold"}}to ='/Store'>Store</Link> {menu==="Store"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Pc")}}><Link style={{textDecoration:"none",color:"white",fontWeight:"bold"}}to ='/Pc'>Pc</Link> {menu==="Pc"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Console")}}><Link style={{textDecoration:"none",color:"white",fontWeight:"bold"}} to ='/Console'>Console</Link>  {menu==="Console"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Mobile")}}><Link  style={{textDecoration:"none",color:"white",fontWeight:"bold"}}to ='/Mobile'>Mobile</Link>  {menu==="Mobile"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Lifestyle")}}><Link style={{textDecoration:"none",color:"white",fontWeight:"bold"}} to ='/Lifestyle'>Life style</Link>  {menu==="Life style"?<hr/>:<></>} </li>
        </ul>
        <button>Signin</button>
    </div>
    <div className='section-2'>
 <p>For a limited time, all orders over US$49 will enjoy free standard shipping to the United States. Shop Now </p>
       </div>
    </div>
    
    
  )
}
 