import React from 'react';
import styled from 'styled-components';
import Carousel from '../components/Carousel';
import Socials from '../components/Socials';

const AboutmePage = () => {
  return (
    <div style={{marginTop: '50px'}}>
      <ElementOrganizer>
        <li>
          <Contributions src="https://ghchart.rshah.org/jonnicwolf" alt="My Github Contributions" />
        </li>
        <li>
          <Carousel />
        </li>
      </ElementOrganizer>
    </div>
  )
};

const Contributions = styled.img`
  height: 150px;
`;
const ElementOrganizer = styled.ul`
  padding-inline-start: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 80px;
  list-style: none;
`;

export default AboutmePage;