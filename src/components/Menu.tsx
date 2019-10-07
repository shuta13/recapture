import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

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
  text-align: center;

  /* setup animation */
  overflow: hidden;
`;
// Linkタグのstyle
const StyledLink = styled.a`
  text-decoration: none;
  font-family: Charmonman;
  font-size: 15px;
  font-weight: bold;

  color: ${ props => props.color };
`

const Menu: React.FC<{ color: string }> = ({ color }) => {
  const [ hovered, setHovered ] = useState<number | string | null>(null)

  // アニメーションの実装
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

  // ホバーイベント取得するクソコード
  const getHomeMouseEvent = () => {
    if (hovered === 0) return onMouseEnterUnderBarStyle
    else if (hovered === 'home') return onMouseLeaveUnderBarStyle
  }
  const getAboutMouseEvent = () => {
    if (hovered === 1) return onMouseEnterUnderBarStyle
    else if (hovered === 'about') return onMouseLeaveUnderBarStyle
  }
  const getWorksMouseEvent = () => {
    if (hovered === 2) return onMouseEnterUnderBarStyle
    else if (hovered === 'works') return onMouseLeaveUnderBarStyle
  }
  const getMediaMouseEvent = () => {
    if (hovered === 3) return onMouseEnterUnderBarStyle
    else if (hovered === 'media') return onMouseLeaveUnderBarStyle
  }

  const CommonUnderBarStyle = styled.div`
    width: 100%;
    height: 2px;
    border-radius: 3px;
    margin-top: -8px;

    transform: translateX(${({hovered}: {hovered: boolean}) => hovered  ?  "0%" : "-102%" });
    background-color: ${ props => props.color };
  `

  // ボタン別のアンダーバーのスタイル(クソコード)
  const HomeUnderBar = styled(CommonUnderBarStyle)`
    animation: ${ getHomeMouseEvent } .6s cubic-bezier(.63,-0.02,.41,.98);
  `
  const AboutUnderBar = styled(CommonUnderBarStyle)`
    animation: ${ getAboutMouseEvent } .6s cubic-bezier(.63,-0.02,.41,.98);
  `
  const WorksUnderBar = styled(CommonUnderBarStyle)`
    animation: ${ getWorksMouseEvent } .6s cubic-bezier(.63,-0.02,.41,.98);
  `
  const MediaUnderBar = styled(CommonUnderBarStyle)`
    animation: ${ getMediaMouseEvent } .6s cubic-bezier(.63,-0.02,.41,.98);
  `

  return (
    <WrapMenu>
      <MenuBar>
        <MenuButton>
          <StyledLink href="/" color={ color } onMouseEnter={ () => setHovered(0) } onMouseLeave={ () => setHovered('home') }>
            Home
          </StyledLink>
          <HomeUnderBar color={ color } hovered={hovered===0} ></HomeUnderBar>
        </MenuButton>
        <MenuButton>
          <StyledLink href="/about" color={ color } onMouseEnter={ () => setHovered(1) } onMouseLeave={ () => setHovered('about') }>
            About
          </StyledLink>
          <AboutUnderBar color={ color } hovered={hovered===1}></AboutUnderBar>
        </MenuButton>
        <MenuButton>
          <StyledLink href="/works" color={ color } onMouseEnter={ () => setHovered(2) } onMouseLeave={ () => setHovered('works') }>
            Works
          </StyledLink>
          <WorksUnderBar color={ color } hovered={hovered===2}></WorksUnderBar>
        </MenuButton>
        <MenuButton>
          <StyledLink href="/media" color={ color } onMouseEnter={ () => setHovered(3) } onMouseLeave={ () => setHovered('media') }>
            Media
          </StyledLink>
          <MediaUnderBar color={ color } hovered={hovered===3}></MediaUnderBar>
        </MenuButton>
      </MenuBar>
    </WrapMenu>
  );
}

export default Menu;
