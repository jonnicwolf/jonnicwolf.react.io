import React from 'react';
import styled from 'styled-components';

const LinkButton = ({textContent}) => {
  return (
    <Button>
      {textContent}
    </Button>
  );
};

const Button = styled.button`
  padding: 25px 80px;
  font-family: var(--font-family-rubik);
  font-weight: 900;
  font-size: 12px;
  background: transparent;
  outline: none !important;
  cursor: pointer;
  position: relative;
  display: inline-block;
  border: 1px solid rgb(0,0,0);
  z-index: 1;
  color: rgb(0,0,0);

  &:after {
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    direction: rtl;
    z-index: -1;
    background: red;
    transition: all 0.1s ease;
  }

  &:hover {
    color: rgb(0,0,0);
    border: 1px solid rgb(0,0,0);
  }

  &:hover:after {
    left: auto;
    right: 0;
    width: 100%;
  }
`;

export default LinkButton;
