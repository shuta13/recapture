import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const WrapMenu = styled.div`
  width: 100vw;
  height: 240px;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
`;
const MenuBar = styled.div`
  width: 360px;
  height: 36px;
  display: flex;
  margin: 0 6vw 0 0;
`;
const MenuButton = styled.span`
  cursor: pointer;
  margin: 0 23px;
  height: 24px;
  /* looks good animation */
  /* width: 54px; */
  text-align: center;

  /* setup animation */
  overflow: hidden;
`;
const MenuUnderBar = styled.div`
  width: 100%;
  height: 2px;
  border-radius: 3px;
  margin-top: -8px;
  
  /* hover animation */
  transform: translate(-102%, 0);
  transition: transform 0s;
  ${MenuButton}:hover & {
    transform: translate(102%, 0);
    transition: transform .6s;
    transition-timing-function: cubic-bezier(.63,-0.02,.41,.98);
  }

  background-color: ${ props => props.color };
`
// Linkタグのstyle
const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: Charmonman;
  font-size: 15px;
  font-weight: bold;

  color: ${ props => props.color };
`

const Menu: React.FC<{ color: string }> = ({ color }) => {
  return (
    <Router>
      <WrapMenu>
        <MenuBar>
          <MenuButton>
            <StyledLink to="/" color={ color }>
              Home
            </StyledLink>
            <MenuUnderBar color={ color }></MenuUnderBar>
          </MenuButton>
          <MenuButton>
            <StyledLink to="/about" color={ color }>
              About
            </StyledLink>
            <MenuUnderBar color={ color }></MenuUnderBar>
          </MenuButton>
          <MenuButton>
            <StyledLink to="/works" color={ color }>
              Works
            </StyledLink>
            <MenuUnderBar color={ color }></MenuUnderBar>
          </MenuButton>
          <MenuButton>
            <StyledLink to="/media" color={ color }>
              Media
            </StyledLink>
            <MenuUnderBar color={ color }></MenuUnderBar>
          </MenuButton>
        </MenuBar>
      </WrapMenu>
    </Router>
  );
}

export default Menu;
