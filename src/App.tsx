import * as React from 'react';
import { Home } from './components/home/Home';
import './App.css';

import { ThemeProvider } from 'styled-components';

const theme = {
    breakpoints: { 
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200
    }
};

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <ThemeProvider theme={theme}>
                    <Home />
                </ThemeProvider>
            </div>
        );
    }
}

export default App;
