import React from 'react'
import Mobile_data from './Assets/data/Mobile'
import Mobile_1 from './Assets/data/Mob_1'
import Item from './Item'
import './Pc.css'
import Footer from './Footer'
export default function Mobile() {
  return (
   <div style={{backgroundColor:"black"}}>
    <div className='discription'>
      <h1>ENGINEERED FOR THE GAME, DESIGNED FOR LIFE</h1>
      <p>This is freedom of play, redefined. Our mobile gaming and lifestyle audio products are crafted to seamlessly integrate <br /> gaming into every aspect of your life.</p>
    </div>
     <div className='mobile'>
        {Mobile_data.map((item,i)=>{
           return(
            <Item key={i} image={item.image} name={item.name} about={item.about}/>
           )
       })}
    </div>
    <div className='discription'>
      <p style={{color:"white", fontSize:"40px"}}>STAY IN-SYNC WITH YOUR WORLD</p>
      <p>Whether you’re working from home or immersed in entertainment, our industry-leading Bluetooth low-latency audio <br /> deliver smooth, stutter-free sound and seamless connectivity.</p>
    </div>
    <div className='mobile'>
    {Mobile_1.map((item,i)=>{
           return(
            <Item key={i} image={item.image} name={item.name} about={item.about}/>
           )
       })}
    </div>
    <Footer/>
   </div>
  )
}
