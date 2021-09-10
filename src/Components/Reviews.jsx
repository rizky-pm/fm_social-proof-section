import React from 'react';
import styled from 'styled-components';

import Review from './Review';

const Container = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 775px;
    width: 335px;
    margin-top: 40px;
    left: 50%;
    transform: translate(-50%, 0%);
`;

const Reviews = () => {
    return (
        <Container>
            <Review />
        </Container>
    );
};

export default Reviews;
