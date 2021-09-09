import React, { Fragment } from 'react';
import GlobalStyle from './globalStyles';

import Header from './Components/Header';
import Ratings from './Components/Ratings';

function App() {
    return (
        <Fragment>
            <GlobalStyle />
            <Header />
            <Ratings />
        </Fragment>
    );
}

export default App;
