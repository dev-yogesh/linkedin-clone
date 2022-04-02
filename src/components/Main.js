import React from 'react';
import styled from 'styled-components';

const Main = () => {
  return (
    <Container>
      <h1>Main</h1>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

export default Main;
