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
        text-align: center;
        padding: 80px 35px;
    }
`;

export default GlobalStyle;
