import React from 'react'
import all_products from './Assets/data/all_products'
import Item from './Item'
import laptop from './Assets/laptop.png'
import gamerroom from './Assets/gamerroom.webp'
import audio from './Assets/audio.webp'
import console from './Assets/console.png'
import mobile from './Assets/mobile.png'
import Footer from './Footer'
export default function Store() {
  return (
    <div style={{backgroundColor:"black" }}>
      <div className='store-nav' style={{display:"flex"}}>
        <div>
        <img src={laptop} alt="" />
        <p>Laptops</p>
        </div>

        <div>
        <img src={gamerroom} alt="" />
        <p>Gamer Room</p>
        </div>

        <div>
        <img src={audio} alt="" />
        <p>Audio</p>
        </div>

        <div>
        <img src={console} alt="" />
        <p>Console</p>
        </div>

        <div>
        <img src={mobile} alt="" />
        <p>Mobile</p>
        </div>
      </div>
        <div className='discription'>
          <h1>THE LATEST AND GREATEST GAMING GEAR</h1>
          <p>Razer mice, keyboards, headsets, laptops & more</p>
        </div>
        <div className='pc'  >
         {all_products.map((item,i)=>{
           return(
            <Item key={i} image={item.image} name={item.name} about={item.about}/>
           )
       })}
    </div>
    <Footer/>
    </div>
  )
}
