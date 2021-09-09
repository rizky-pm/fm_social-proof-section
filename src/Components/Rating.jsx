import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { RATINGS } from '../dataSets';
import { COLORS, FONTWEIGHT } from '../constants';

const Container = styled.div`
    background-color: ${COLORS.lightGray};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 95px;
    width: 335px;
    padding: 20px 0;
    border-radius: 5px;
`;

const StarsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 20px;
`;

const From = styled.p`
    font-size: 15px;
    font-weight: ${FONTWEIGHT.bold};
`;

const Rating = () => {
    return RATINGS.map((data) => {
        let starsLeft = 5 - data.rate;
        let stars = [];
        for (let i = 1; i <= data.rate; i++) {
            stars.push(
                <FontAwesomeIcon
                    style={{ margin: '0 5px' }}
                    key={i + 1}
                    icon={faStar}
                />
            );
        }

        for (let i = 1; i <= starsLeft; i++) {
            stars.push(
                <FontAwesomeIcon
                    style={{ margin: '0 5px', color: `${COLORS.darkGray}` }}
                    key={i + 10}
                    icon={faStar}
                />
            );
        }

        return (
            <Container key={data.from}>
                <StarsContainer>{stars}</StarsContainer>
                <From>
                    Rated {data.rate} Stars in {data.from}
                </From>
            </Container>
        );
    });
};

export default Rating;
