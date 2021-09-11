import React from 'react';
import styled from 'styled-components';

import * as cssvariables from '../constants';

const HeaderSection = styled.header`
    grid-area: header;

    @media only screen and (min-width: ${cssvariables.SIZE.laptops}) {
    }
`;

const Title = styled.p`
    font-size: 2rem;
    font-weight: ${cssvariables.FONTWEIGHT.bold};

    @media only screen and (min-width: ${cssvariables.SIZE.laptops}) {
        font-size: 3rem;
        width: 26.875rem;
    }
`;

const Description = styled.p`
    margin-top: 1.5625rem;
    font-size: 0.9375rem;
    font-weight: ${cssvariables.FONTWEIGHT.medium};
    line-height: 1.5625rem;
    opacity: 0.75;

    @media only screen and (min-width: ${cssvariables.SIZE.laptops}) {
        margin-top: 0.625rem;
        width: 28.4375rem;
    }
`;

const Header = () => {
    return (
        <HeaderSection>
            <Title>10,000+ of our users love our products.</Title>
            <Description>
                We only provide great products combined with excellent customer
                service. See what our satisfied customers are saying about our
                services.
            </Description>
        </HeaderSection>
    );
};

export default Header;
