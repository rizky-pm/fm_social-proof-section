import React from 'react';
import styled from 'styled-components';

import GlobalStyle from './globalStyles';
import { SIZE } from './constants';

import Header from './Components/Header';
import Ratings from './Components/Ratings';
import Reviews from './Components/Reviews';

import MobileTopBackground from './Images/bg-pattern-top-mobile.svg';
import MobileBottomBackground from './Images/bg-pattern-bottom-mobile.svg';

const AppContainer = styled.main`
    text-align: center;

    @media only screen and (min-width: ${SIZE.laptops}) {
        display: grid;
        grid-template-areas:
            'header ratings'
            'reviews reviews';
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        text-align: left;
    }
`;

const TopBackground = styled.img`
    position: absolute;
    top: 0;
    left: 2.5rem;
    z-index: -1000;
`;

const BottomBackground = styled.img`
    position: absolute;
    bottom: -52.8215rem;
    right: 2.5rem;
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
