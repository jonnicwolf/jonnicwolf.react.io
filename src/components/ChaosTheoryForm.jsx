import React from 'react';
import styled from 'styled-components';

export default function ChaosTheoryForm({ vars, varsSetter }) {
  const { sigma, rho, beta } = vars;
  return (
    <div>
      <div>
        <button>⬆</button>
        <div>{sigma}</div>
        <button>⬇</button>
      </div>
      <div>
      <button>⬆</button>
        <div>{rho}</div>
        <button>⬇</button>
      </div>
      <div>
      <button>⬆</button>
        <div>{beta}</div>
        <button>⬇</button>
      </div>
    </div>
  );
};
