import React from 'react';
import shapes from '../../assets/intro-shapes.png';
import '../../styling/main.css';

const Main = () => {

  return (
    <div className='origin-box'>
      <div className='origin-text'>
        <img alt='shapes' src={shapes} />
        <h1> <span>Start</span>, <span>raise</span> and <span>grow</span> faster with SeedLegals</h1>
        <p>The legals for growing your company. <b>Sorted.</b></p>
      </div>
    </div>
  )

}

export default Main;
