import React from 'react';
import styled from 'styled-components';

import GlobalStyle from './globalStyles';
import { SIZE } from './constants';
import { COLORS } from './constants';

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

    @media only screen and (min-width: ${SIZE.laptops}) {
        top: 0;
        left: 3.75rem;
    }
`;

const BottomBackground = styled.img`
    position: absolute;
    bottom: -52.8215rem;
    right: 2.5rem;
    z-index: -1000;

    @media only screen and (min-width: ${SIZE.laptops}) {
        bottom: 0;
        right: 0;
    }
`;

const Attribution = styled.section`
    text-align: center;
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 500;
    position: relative;
    top: 1.5625rem;

    @media only screen and (min-width: ${SIZE.laptops}) {
        left: 50%;
    }
`;

const Link = styled.a`
    color: inherit;
    transition: all ease 0.2s;

    :hover {
        text-decoration: none;
        color: ${COLORS.secondary};
    }
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
            <Attribution>
                Challenge by&nbsp;
                <Link href='https://www.frontendmentor.io?ref=challenge'>
                    Frontend Mentor
                </Link>
                . Coded by{' '}
                <Link href='https://github.com/rizky-pm'>
                    Rizky Putra Mahendra
                </Link>
                .
            </Attribution>
        </AppContainer>
    );
}

export default App;
