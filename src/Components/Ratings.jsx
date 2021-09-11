import React from 'react';
import styled from 'styled-components';

import { SIZE } from '../constants';

import Rating from './Rating';

const Container = styled.section`
    grid-area: ratings;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 20.3125rem;
    width: 20.9375rem;
    margin-top: 2.5rem;
    left: 50%;
    transform: translate(-50%, 0%);

    @media only screen and (min-width: ${SIZE.laptops}) {
        height: 13.75rem;
        margin-top: 0.9375rem;
        left: 5.9375rem;

        transform: none;
    }
`;

const Ratings = () => {
    return (
        <Container>
            <Rating />
        </Container>
    );
};

export default Ratings;
