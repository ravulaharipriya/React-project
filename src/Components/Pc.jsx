import React from 'react'
import './Pc.css'
import Pc_data from './Assets/data/Pc'
import Item from './Item'
import Pc_bgimg1 from './Assets/Pc_bgimg1.jpg'
import pc_laptop from './Assets/data/Pc_1'
import Footer from './Footer'
export default function Pc() {
  return (
    <div style={{backgroundColor:"black"}}>
        <div className='discription'>
            <h1>LAPTOPS & DESKTOPS</h1>
            <p>The most powerful rigs mean nothing without the best gear to match. Gain a competitive edge with PC and laptop <br /> peripherals armed with our latest technology. From award-winning mice and keyboards to industry-leading headsets <br /> and monitors, deck out your setup with our comprehensive selection of peripherals for gaming and work.</p>
        </div>
        <div className='pc'>
       {Pc_data.map((item,i)=>{
           return(
            <Item key={i} image={item.image} name={item.name} about={item.about}/>
           )
       })}
    </div>
    <div className='discription'>
    <h1>PC & LAPTOP PERIPHERALS</h1>
    <p>From cutting-edge gaming and creator laptops to high-end components for your dream PC build, Razer systems are <br /> meticulously crafted to provide the ultimate performance for work and play. Supported by our diverse collection of <br /> gamer accessories and PC peripherals, we’ve got you covered when it comes to your unique gaming or office <br /> desktop needs.</p>
    </div>
    <div className='pc-laptop'>
    {pc_laptop.map((item,i)=>{
           return(
            <Item key={i} image={item.image} name={item.name} about={item.about}/>
           )
       })}
    </div>
    <Footer/>
    </div>
  )
}
