import React from 'react';
import styled from 'styled-components';

import Rating from './Rating';

const Container = styled.section`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 325px;
    width: 335px;
    margin-top: 60px;
    left: 50%;
    transform: translate(-50%, 0%);
`;

const Ratings = () => {
    return (
        <Container>
            <Rating />
        </Container>
    );
};

export default Ratings;
