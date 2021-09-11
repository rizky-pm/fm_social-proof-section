import React from 'react';
import styled from 'styled-components';

import { SIZE } from '../constants';

import Review from './Review';

const Container = styled.section`
    grid-area: reviews;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 38.4375rem;
    width: 20.9375rem;
    margin-top: 2.5rem;
    left: 50%;
    transform: translate(-50%, 0%);

    @media only screen and (min-width: ${SIZE.laptops}) {
        margin-top: 32px;
        height: 16.875rem;
        width: 100%;
        align-items: flex-start;
        flex-direction: row;
        left: 0;
        transform: translate(0%, 0%);
    }
`;

const Reviews = () => {
    return (
        <Container>
            <Review />
        </Container>
    );
};

export default Reviews;
