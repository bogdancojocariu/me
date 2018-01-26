import * as React from 'react';
import Typing from 'react-typist';

export class Home extends React.Component {
    render() {
        const social = ['facebook', 'linkedin', 'pornhub', 'tinder'];
        const getSocial = social.map( s => {
            return (
                <span key={s}>
                    <span>{s}</span>
                    <Typing.Backspace count={s.length} delay={500} />
                </span>
            );
        });

        return (
            <div>
                <h1>Hello, my name is Bogdan and I am a frontend developer</h1>
                <h2>Welcome to my homepage</h2>
                <div className="social">
                    <Typing>
                        {getSocial}
                        <span>twitter</span>
                    </Typing>
                </div>
            </div>
        );
    }
}