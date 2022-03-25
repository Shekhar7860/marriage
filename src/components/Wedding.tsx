import React from 'react'
import '../App.css';
import Background from '../assets/image3.jpg';
import CardWedding from '../CardWedding';
export default function Wedding ()  {
  return(<div className='Home'  style={{
    background: `url(${Background})`,
    backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
  }}>
      <div className='card-container'>
      <CardWedding/>
      </div>
 </div>)
}