import React from 'react';
import styled from 'styled-components';

import Grid from '../components/Grid';
import Menu from '../components/Menu';

// Recapture
const WrapTitle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  color: #1d1d1d;
  font-family: Sacramento;
  font-size: 240px;
`;

const Home: React.FC = () => {
  return (
    <div>
      <Grid></Grid>
        <Menu></Menu>
        <WrapTitle>
          <Title>Recapture.</Title>
        </WrapTitle>
    </div>
  );
};

export default Home;
