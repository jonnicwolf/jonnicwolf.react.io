import React from 'react';
import NameCard from '../components/NameCard.jsx';
import ProLinks from './ProLinks';

const LandingPage = () => {
  return (
    <div>
      <div>
        <NameCard />
        <br /><br /><br /><br /><br />
        <span>Space for p5js project</span>
        <ProLinks />
        <button>Enter</button>
      </div>
    </div>
  )
};

export default LandingPage;