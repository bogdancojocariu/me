import * as React from 'react';
import Typing from 'react-typing-animation';
import styled from 'styled-components';
import FA from 'react-fontawesome';

const right = require('./right_side.jpg');

const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
`;
const Title = styled.div`
    margin-top: 30%;
`;

const LeftSide = styled.div`
    float: left;
    width: 60%;
    height: 100%;
`;
const RightSide = styled.div`
    width: 40%;
    height: 100%;
    background-image: url(${right});
    background-size: cover;
`;
const StyledSocial = styled.a`
    margin: 0 20px;
    color: black;
`;

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

        const socialLinks = [
            {site: 'facebook', icon: 'facebook-square', link: 'https://www.facebook.com/cbogdan'},
            {site: 'instagram', icon: 'instagram', link: 'https://www.instagram.com/bogdan.cojocariu/'},
            {site: 'linkedin', icon: 'linkedin-square ', link: 'https://www.linkedin.com/in/bcojocariu/'}
        ];

        const generateSocialLinks = socialLinks.map(s => {
            return (
                <StyledSocial href={s.link} key={s.site} className="fa-stack fa-lg">
                    <FA name={s.icon} size="2x" />
                </StyledSocial>
            );
        });

        return (
            <Wrapper>
                <LeftSide>
                    <Title>
                        <h1>Hello, I am Bogdan and I am a frontend developer</h1>
                        <h2>Welcome to my homepage</h2>
                        <div className="social">
                            <Typing>
                                {getSocial}
                                <span>twitter</span>
                            </Typing>
                        </div>
                    </Title>
                    <div>
                        {generateSocialLinks}
                    </div>
                </LeftSide>
                <RightSide />
            </Wrapper>
        );
    }
}