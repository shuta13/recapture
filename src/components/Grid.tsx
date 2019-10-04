import React from 'react';
import styled from 'styled-components';

const WrapGrid = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;
const GridOuter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1600px;
  height: 94%;
  border: solid 2px #1d1d1d;
`;
const GridInner = styled.div`
  width: 1520px;
  height: 92%;
  border: solid 2px #1d1d1d;
`;

const Grid: React.FC = () => {
  return (
    <WrapGrid>
      <GridOuter>
        <GridInner></GridInner>
      </GridOuter>
    </WrapGrid>
  );
}

export default Grid;
