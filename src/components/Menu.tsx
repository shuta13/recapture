import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
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
// Linkタグのstyle
const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: Charmonman;
  font-size: 15px;
  font-weight: bold;

  color: ${ props => props.color };
`

const Menu: React.FC<{ color: string }> = ({ color }) => {
  const [ isHover, setIshover ] = useState()
  const onMouseEnterUnderBarStyle = keyframes`
    0% {
      transform: translateX(-102%);
    }
    100% {
      transform: translateX(0%);
    }
  `
  const onMouseLeaveUnderBarStyle = keyframes`
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(102%);
    }
  `
  const getMouseEvent = () => {
    switch (isHover) {
      case 'enter' :
        return onMouseEnterUnderBarStyle
      case 'leave' :
        return onMouseLeaveUnderBarStyle
    }
  }
  const MenuUnderBar = styled.div`
    width: 100%;
    height: 2px;
    border-radius: 3px;
    margin-top: -8px;

    transform: translateX(${ isHover==='enter' ?  "0%" : "-102%" });

    /* hover animation */
    /* transform: translate(-102%, 0);
    transition: transform 0s;
    ${MenuButton}:hover & {
      transform: translate(102%, 0);
      transition: transform .6s;
      transition-timing-function: cubic-bezier(.63,-0.02,.41,.98);
    } */

    animation: ${ getMouseEvent } .6s cubic-bezier(.63,-0.02,.41,.98);

    background-color: ${ props => props.color };
  `
  const onMouseEnterEvent = () => {
    setIshover('enter')
  }
  const onMouseLeaveEvent = () => {
    setIshover('leave')
  }
  return (
    <Router>
      <WrapMenu>
        <MenuBar>
          <MenuButton>
            <StyledLink to="/" color={ color } onMouseEnter={ onMouseEnterEvent } onMouseLeave={ onMouseLeaveEvent }>
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
