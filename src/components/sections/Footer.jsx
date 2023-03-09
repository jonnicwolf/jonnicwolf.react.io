import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <NotoSansDisplay>&#169; 2021 Jonathan N. W. Narine </NotoSansDisplay>
    </FooterContainer>
  )
};

const FooterContainer = styled.footer`
  margin-top: 150px;
  font-size: 80px;
  color: rgb(0, 0, 0);
  text-align: center;
  height: 100px;
  width: 100%;
  border-top: 2px solid rgb(0, 0, 0);
  opacity: 0.3;
`
const NotoSansDisplay = styled.p`
font-family: var(--font-family-noto-sans-display);
font-weight: var(--font-weight-bold);
font-size: 40px;
color: dark brown;
`;

export default Footer;