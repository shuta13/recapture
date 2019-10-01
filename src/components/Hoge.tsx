import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';

const AppWrap = styled.div`
  text-align: center;
`

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`
const AppLogo = styled.img`
  height: 40vmin;
`

const AppLink = styled.a`
  color: #09d3ac;
`

const Hoge: React.FC = () => {
  return (
    <AppWrap>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <AppLink
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
      </AppHeader>
    </AppWrap>
  );
};

export default Hoge;
