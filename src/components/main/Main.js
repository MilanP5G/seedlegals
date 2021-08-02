import React from 'react';
import shapes from '../../assets/intro-shapes.png';
import seis from '../../assets/apply-for-seis.png';
import raise from '../../assets/raise-before.png';
import funding from '../../assets/do-a-funding-round.png';
import policy from '../../assets/company-policies.png';
import share from '../../assets/share-option-scheme.png';
import team from '../../assets/team-agreement.png';
import table from '../../assets/cap-table.png';
import compliance from '../../assets/seis-compliance.png';
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
          <img alt="seis" src={seis} />
        </div>
        <div className='feature-raise'>
          <img alt="raise" src={raise} />
        </div>
        <div className='feature-funding'>
          <img alt="funding" src={funding} />
        </div>
        <div className='feature-emi'>
          <img alt="policy" src={policy} />
        </div>
        <div className='feature-topup'>
          <img alt="share" src={share} />
        </div>
        <div className='feature-cap'>
          <img alt="table" src={table} />
        </div>
        <div className='feature-tax'>
          <img alt="compliance" src={compliance} />
        </div>
        <div className='feature-contracts'>
          <img alt="team" src={team} />
        </div>
      </div>
    </div>
  )

}

export default Main;
