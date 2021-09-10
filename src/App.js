import React from 'react';
import styled from 'styled-components';

import GlobalStyle from './globalStyles';

import Header from './Components/Header';
import Ratings from './Components/Ratings';
import Reviews from './Components/Reviews';

import MobileTopBackground from './Images/bg-pattern-top-mobile.svg';
import MobileBottomBackground from './Images/bg-pattern-bottom-mobile.svg';

const AppContainer = styled.main``;

const TopBackground = styled.img`
    position: absolute;
    top: 0;
    left: 40px;
    z-index: -1000;
`;

const BottomBackground = styled.img`
    position: absolute;
    bottom: -845px;
    right: 40px;
    z-index: -1000;
`;

function App() {
    return (
        <AppContainer>
            <TopBackground src={MobileTopBackground} alt='' />
            <GlobalStyle />
            <Header />
            <Ratings />
            <Reviews />
            <BottomBackground src={MobileBottomBackground} alt='' />
        </AppContainer>
    );
}

export default App;
