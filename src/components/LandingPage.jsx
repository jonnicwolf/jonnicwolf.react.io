import React from 'react';
import NameCard from 'src/components/sections/NameCard';
import ProLinks from './ProLinks';

const LandingPage = () => {
  return (
    <div>
      <div>
        <NameCard />
        <ProLinks />
        <button>Enter</button>
      </div>
    </div>
  )
};

export default LandingPage;