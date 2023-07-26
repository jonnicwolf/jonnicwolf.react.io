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
  padding: 15px 80px;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 15px;
  background: transparent;
  outline: none !important;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  border: 1px solid rgb(0,0,0);
  z-index: 1;
  color: rgb(0,0,0);
  // left: 20px;

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
    transition: all 0.3s ease;
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
