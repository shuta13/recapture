import React from 'react';
import styled from 'styled-components';

const AppHead = styled.div`
  background-color: #1D1D1D;
  font-family: 'Noto Sans';
  font-size: 24px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const AppContent = styled.div`
  color: #fff;
  transition: color .4s;
  &:hover {
    color: #CCDFFF;
  }
`

const NotFound: React.FC = () => {
  return (
    <AppHead>
      <AppContent>
        not found
      </AppContent>
    </AppHead>
  );
};

export default NotFound;
