import React from 'react';
import styled from 'styled-components';

const GalleryPage = ({ darkMode }) => {
  return (
    <Container>
      <DisplayBox>
        <></>
      </DisplayBox>
    </Container>
  );
};

const Container = styled.div`

`;
const Title = styled.h1``;
const DisplayBox = styled.div`
  height: 120vw;
  border: 1px solid red;
`;
const ControlBox = styled.div``;
const Next = styled.button``;
const Last = styled.button``;

export default GalleryPage;
