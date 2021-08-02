import React from 'react';
import shapes from '../../assets/intro-shapes.png';
import '../../styling/main.css';

const Main = () => {

  return (
    <div className='origin-box'>
      <img alt='shapes' src={shapes} />
      <div className='origin-text'>
        <h1>Start, raise and grow faster with SeedLegals</h1>
      </div>
    </div>
  )

}

export default Main;
