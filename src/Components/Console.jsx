import React from 'react'
import Con_data from './Assets/data/Console'
import Item from './Item'
import './Pc.css'
import Footer from './Footer'
export default function Console() {
  return (
<div style={{backgroundColor:"black"}} >
  <div className='discription'>
    <h1>CONSOLE GAMING</h1>
    <p>Whatever gaming console you own, make your setup truly next-gen with our expansive arsenal of high-performance <br /> hardware. From immersive audio gear and essential accessories to multi-platform PC gaming controllers, secure the <br /> upgrades you need to achieve your perfect PlayStation 5, Xbox Series X|S, or Nintendo Switch loadout.</p>
  </div>
<div className='console'>
        {Con_data.map((item,i)=>{
           return(
            <Item key={i} image={item.image} name={item.name} about={item.about}/>
           )
       })}
    </div>
    <Footer/>
</div>
  )
}
