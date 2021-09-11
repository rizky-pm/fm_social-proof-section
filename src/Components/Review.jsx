import React from 'react';
import styled from 'styled-components';

import { COLORS, FONTWEIGHT } from '../constants';
import { REVIEWS } from '../dataSets';
import { SIZE } from '../constants';

const Container = styled.section`
    background-color: ${COLORS.primary};
    text-align: left;
    display: grid;
    grid-template-areas:
        'pict fullname'
        'pict status'
        'review review';
    grid-template-columns: 1fr 3.5fr;
    grid-template-rows: 1.5625rem 2.5rem;
    height: 15.3125rem;
    width: 100%;
    padding: 1.875rem 1.25rem;
    border-radius: 0.625rem;
    font-size: 0.875rem;

    @media only screen and (min-width: ${SIZE.laptops}) {
        grid-template-rows: 1.5625rem 1fr;
        grid-template-columns: 1fr 4fr;
        height: 220px;
        width: 21.875rem;
        margin-top: ${(props) => props.marginTop}px;
        padding: 1.875rem;
    }
`;

const ProfilePicture = styled.img`
    grid-area: pict;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
`;

const FullName = styled.p`
    margin-top: 0.15625rem;
    grid-area: fullname;
    color: ${COLORS.white};
    font-weight: ${FONTWEIGHT.medium};
`;

const Status = styled.p`
    grid-area: status;
    color: ${COLORS.secondary};
    opacity: 0.5;
`;

const WhatTheySaid = styled.p`
    grid-area: review;
    width: 18.125rem;
    color: ${COLORS.white};
    line-height: 1.5625rem;

    @media only screen and (min-width: ${SIZE.laptops}) {
        font-size: 0.8125rem;
    }
`;

const Review = () => {
    let marginTop = -1;
    return REVIEWS.map((review) => {
        marginTop += 1;
        return (
            <Container key={review.id} marginTop={`${marginTop * 15}`}>
                <ProfilePicture src={review.picture} alt='' />
                <FullName>{review.fullName}</FullName>
                <Status>{review.status}</Status>
                <WhatTheySaid>{review.review}</WhatTheySaid>
            </Container>
        );
    });
};

export default Review;
