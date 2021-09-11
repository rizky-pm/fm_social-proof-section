import { createGlobalStyle } from 'styled-components';
import * as cssvariables from './constants';

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    body {
        box-sizing: border-box;
        font-family: ${cssvariables.FONTFAMILY};
        color: ${cssvariables.COLORS.primary};
        padding: 5rem 2.1875rem;

        @media only screen and (min-width: ${cssvariables.SIZE.laptops}) {
            padding: 50px 6.25rem;
            overflow: hidden;
        }
    }
`;

export default GlobalStyle;
