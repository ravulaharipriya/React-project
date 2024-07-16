import React from 'react'
import Backgroundimage1 from './Backgroundimage1'
import Backgroundimg from './Backgroundimg'
import Car from './Car'
import Razergrid from './Razergrid'
import Item from './Item'
import Footer from './Footer'


export default function Home() {
  return (
    <div className='home'> 
     <Backgroundimg/>
      <Backgroundimage1/>
     <Car/>
    <Razergrid/>
    <Footer/>
  </div>
  )
}
