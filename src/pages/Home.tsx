import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link } from 'react-router-dom';

// 枠線
const WrapGrid = styled.div`
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

// メニューバー
const WrapMenu = styled.div`
  width: 100vw;
  height: 120px;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
`;
const Menu = styled.div`
  width: 360px;
  height: 36px;
  display: flex;
  margin: 0 6vw 0 0;
`;
const MenuButton = styled.span`
  cursor: pointer;
  margin: 0 24px;
  height: 24px;
  width: 50px;
`;
const MenuUnderBar = styled.div`
  background-color: #1d1d1d;
  width: 100%;
  height: 2px;
  border-radius: 3px;
  margin-top: -8px;
  transform: translate(-102%, 0);
  transition: transform .4s;
  ${MenuButton}:hover & {
    transform: translate(0, 0);
  }
`

// Linkタグのstyle
const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: Charmonman;
  font-size: 16px;
  font-weight: bold;
  color: #1d1d1d;
`

// Recapture
const WrapTitle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  color: #1d1d1d;
  font-family: Sacramento;
  font-size: 220px;
`;

const Home: React.FC = () => {
  const [hover, setHover] = useState(false);
  const onMouseEnterHandler = (path: string) => {
    console.log(path)
    setHover(true);
    console.log(hover)
  }
  const onMouseLeaveHandler = (path: string) => {
    console.log(path)
    setHover(false);
    console.log(hover)
  }
  return (
    <Router>
      <WrapGrid>
        <GridOuter>
          <GridInner>
            <WrapMenu>
              <Menu>
                <MenuButton>
                  <StyledLink to="/" onMouseEnter={ () => onMouseEnterHandler('/') } onMouseLeave={ () => onMouseLeaveHandler('/') }>
                    Home
                  </StyledLink>
                  <MenuUnderBar></MenuUnderBar>
                </MenuButton>
                <MenuButton>
                  <StyledLink to="/about" onMouseEnter={ () => onMouseEnterHandler('/about') } onMouseLeave={ () => onMouseLeaveHandler('/about') }>
                    About
                  </StyledLink>
                </MenuButton>
                <MenuButton>
                  <StyledLink to="/works" onMouseEnter={ () => onMouseEnterHandler('/works') } onMouseLeave={ () => onMouseLeaveHandler('/works') }>
                    Works
                  </StyledLink>
                </MenuButton>
                <MenuButton>
                  <StyledLink to="/media" onMouseEnter={ () => onMouseEnterHandler('/media') } onMouseLeave={ () => onMouseLeaveHandler('/media') }>
                    Media
                  </StyledLink>
                </MenuButton>
              </Menu>
            </WrapMenu>
            <WrapTitle>
              <Title>Recapture.</Title>
            </WrapTitle>
          </GridInner>
        </GridOuter>
      </WrapGrid>
    </Router>
  );
};

export default Home;
