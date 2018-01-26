import * as React from 'react';
import { Home } from './components/home/Home';
import './App.css';

const logo = require('./logo.svg');

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <Home />
            </div>
        );
    }
}

export default App;
