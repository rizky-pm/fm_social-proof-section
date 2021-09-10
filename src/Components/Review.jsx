import React from 'react';
import styled from 'styled-components';

import { COLORS, FONTWEIGHT } from '../constants';
import { REVIEWS } from '../dataSets';

const Container = styled.section`
    background-color: ${COLORS.primary};
    text-align: left;
    display: grid;
    grid-template-areas:
        'pict fullname'
        'pict status'
        'review review';
    grid-template-columns: 1fr 3.5fr;
    grid-template-rows: 25px 40px;
    height: 245px;
    width: 100%;
    padding: 30px 20px;
    border-radius: 10px;
    font-size: 14px;
`;

const ProfilePicture = styled.img`
    grid-area: pict;
    width: 40px;
    height: 40px;
    border-radius: 50%;
`;

const FullName = styled.p`
    margin-top: 2.5px;
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
    width: 290px;
    color: ${COLORS.white};
    line-height: 25px;
`;

const Review = () => {
    return REVIEWS.map((review) => {
        return (
            <Container key={review.id}>
                <ProfilePicture src={review.picture} alt='' />
                <FullName>{review.fullName}</FullName>
                <Status>{review.status}</Status>
                <WhatTheySaid>{review.review}</WhatTheySaid>
            </Container>
        );
    });
};

export default Review;
