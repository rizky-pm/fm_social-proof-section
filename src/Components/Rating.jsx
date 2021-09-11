import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { RATINGS } from '../dataSets';
import { COLORS, FONTWEIGHT } from '../constants';
import { SIZE } from '../constants';

const Container = styled.div`
    background-color: ${COLORS.lightGray};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 5.9375rem;
    width: 20.9375rem;
    padding: 1.25rem 0;
    border-radius: 0.3125rem;

    @media only screen and (min-width: ${SIZE.laptops}) {
        width: 27.5rem;
        height: 3.75rem;
        border-radius: 0.625rem;
        flex-direction: row;
        margin-left: ${(props) => props.marginLeft}px;
    }
`;

const StarsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 7.5rem;
    height: 1.25rem;
`;

const From = styled.p`
    font-size: 0.9375rem;
    font-weight: ${FONTWEIGHT.bold};
`;

const Rating = () => {
    let marginLeft = -1;
    return RATINGS.map((data) => {
        marginLeft += 1;
        let starsLeft = 5 - data.rate;
        let stars = [];
        for (let i = 1; i <= data.rate; i++) {
            stars.push(
                <FontAwesomeIcon
                    style={{ margin: '0 5px', color: `${COLORS.stars}` }}
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
            <Container key={data.from} marginLeft={`${marginLeft * 100}`}>
                <StarsContainer>{stars}</StarsContainer>
                <From>
                    Rated {data.rate} Stars in {data.from}
                </From>
            </Container>
        );
    });
};

export default Rating;
