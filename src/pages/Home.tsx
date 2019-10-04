import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Grid from '../components/Grid';
import Menu from '../components/Menu';

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;

  background: ${ props => props.color==='#fff' ? '#1d1d1d' : '#fff' };
`;

const WrapTitle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  font-family: Sacramento;
  font-size: 220px;

  color: ${ props => props.color };
`;

const Home: React.FC = () => {
  const [ theme, setTheme ] = useState('#1d1d1d');
  useEffect(() => {
    setTimeout(() => {
      setTheme('#fff');
    }, 2000)
  })
  return (
    <Background color={ theme }>
      <Grid color={ theme }></Grid>
        <Menu color={ theme }></Menu>
        <WrapTitle>
          <Title color={ theme }>Recapture.</Title>
        </WrapTitle>
    </Background>
  );
};

export default Home;
