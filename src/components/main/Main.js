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
import shapeDots from '../../assets/shape-dots.png';
import shapeC from '../../assets/shape-c.png';
import shapeTick from '../../assets/shape-tick.png';
import companies from '../../assets/companies-use-1.png';
import numberOne from '../../assets/no1.png';
import raised from '../../assets/investment-closed.png';
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
          <p>Get SEIS/EIS assurance</p>
        </div>
        <div className='feature-raise'>
          <img alt="raise" src={raise} />
          <p>Raise before a round</p>
        </div>
        <div className='feature-funding'>
          <img alt="funding" src={funding} />
          <p>Do a funding round</p>
        </div>
        <div className='feature-emi'>
          <img alt="policy" src={policy} />
          <p>Create your EMI Scheme</p>
        </div>
        <div className='feature-topup'>
          <img alt="share" src={share} />
          <p>Top up a round</p>
        </div>
        <div className='feature-cap'>
          <img alt="table" src={table} />
          <p>Manage your Cap Tables</p>
        </div>
        <div className='feature-tax'>
          <img alt="compliance" src={compliance} />
          <p>Claim R&D Tax Credits</p>
        </div>
        <div className='feature-contracts'>
          <img alt="team" src={team} />
          <p>Create contracts</p>
        </div>
      </div>
      <div className='origin-stats'>
        <div className='stats-shape-one'>
          <img alt='Shapes' src={shapeDots} />
        </div>
        <div className='stats-shape-two'>
          <img alt='Shapes' src={shapeTick} />
        </div>
        <div className='stats-shape-three'>
          <img alt='Shapes' src={shapeC} />
        </div>
        <div className='stats-companies'>
          <img alt='Companies' src={companies} />
          <h1>25,000+</h1>
          <p>Companies on SeedLegals</p>
        </div>
        <div className='stats-number-one'>
          <img alt="UK's #1" src={numberOne} />
          <h1>UK's #1</h1>
          <p>for funding rounds, cap tables & share option schemes</p>
        </div>
        <div className='stats-raised'>
          <img alt='Raised' src={raised} />
          <h1>£500M</h1>
          <p>Raised on SeedLegals</p>
        </div>
      </div>
    </div>
  )

}

export default Main;
