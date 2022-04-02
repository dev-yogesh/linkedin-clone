import React from 'react';
import styled from 'styled-components';

const Rightside = () => {
  return (
    <Container>
      <h1>Rightside</h1>
    </Container>
  );
};

const Container = styled.div`
  grid-area: rightside;
`;

export default Rightside;
