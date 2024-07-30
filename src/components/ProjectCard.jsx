import React from 'react';
import styled from 'styled-components';

const cover = 'https://res.cloudinary.com/dhah4xjvr/image/upload/f_auto,q_auto/v1/fezz.dev/photos/photos/z265st6zxzzcvahg9sca'
export default function ProjectCard ({
  bio,
  title,
  href1,
  href2,
  cover,
  gifPath,
  description,
  devicons,
}) {
  return (
    <Container>
      ProjectCard
    </Container>
  );
};

const Container = styled.div`
  height: 50vh;
  width: 50vw;
  border: 1px solid red;
`;


