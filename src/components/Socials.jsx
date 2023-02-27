import React from 'react';
import styled from 'styled-components';
import linkedIn from '../assets/icons/linkedin.png'

const Socials = () => {
  return (
    <ul>
      <li>
        <img style={{height: '100px'}}src={linkedIn} alt="LinkedIn" />
      </li>
      <li>
        <a>GitHub</a>
      </li>
    </ul>
  )
};

export default Socials;