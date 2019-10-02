import React from 'react';
import styled from 'styled-components';

const WrapGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`
const GridOuter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1600px;
  height: 94%;
  border: solid 2px;
`
const GridInner = styled.div`
  width: 1520px;
  height: 92%;
  border: solid 2px;
`

const WrapMenu = styled.div`
  width: 100vw;
  height: 120px;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
`
const Menu = styled.div`
  width: 360px;
  height: 36px;
  display: flex;
  margin: 0 6vw 0 0;
`
const MenuButton = styled.button`
  /* button init */
  outline: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  appearance: none;

  /* design */
  color: #000;
  font-family: Charmonman;
  font-size: 16px;
  font-weight: bold;
  margin: 0 24px;
  height: 24px;

  /* hover animation */
  transition: border-bottom 0.1s;
  &:hover {
    border-bottom: solid 2px;
  }
`

const WrapTitle = styled.div`
  width: 100%;
  height: 100%;
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
    <WrapGrid>
      <GridOuter>
        <GridInner>
          <WrapMenu>
            <Menu>
              <MenuButton>Home</MenuButton>
              <MenuButton>About</MenuButton>
              <MenuButton>Works</MenuButton>
              <MenuButton>Media</MenuButton>
            </Menu>
          </WrapMenu>
          <WrapTitle>
            <Title>Recapture.</Title>
          </WrapTitle>
        </GridInner>
      </GridOuter>
    </WrapGrid>
  );
};

export default Home;
