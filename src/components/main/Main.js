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
        <button className="origin-start" type="submit">
          Start Free
        </button>
        <button className="origin-talk" type="submit">
          Talk to an expert
        </button>
      </div>
      <div className='origin-features'>
        <div className='feature-assurance'>
        </div>
        <div className='feature-raise'>
        </div>
        <div className='feature-funding'>
        </div>
        <div className='feature-emi'>
        </div>
        <div className='feature-topup'>
        </div>
        <div className='feature-cap'>
        </div>
        <div className='feature-tax'>
        </div>
        <div className='feature-contracts'>
        </div>
      </div>
    </div>
  )

}

export default Main;
