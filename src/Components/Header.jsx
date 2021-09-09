import React from 'react';
import styled from 'styled-components';

import * as cssvariables from '../constants';

const HeaderSection = styled.header``;

const Description = styled.p`
    margin-top: 25px;
    font-size: 15px;
    font-weight: ${cssvariables.FONTWEIGHT.medium};
    line-height: 25px;
    opacity: 0.75;
`;

const Header = () => {
    return (
        <HeaderSection>
            <h1>10,000+ of our users love our products.</h1>
            <Description>
                We only provide great products combined with excellent customer
                service. See what our satisfied customers are saying about our
                services.
            </Description>
        </HeaderSection>
    );
};

export default Header;
