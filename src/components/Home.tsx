import React from 'react';
import styled from 'styled-components';

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
`;

const Home: React.FC = () => {
  return (
    <WrapTitle>
      <Title>Recapture.</Title>
    </WrapTitle>
  );
};

export default Home;
