import * as React from 'react';
import Typist from 'react-typist';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import FA from 'react-fontawesome';

const right = require('./right_side.jpg');
const left = require('./left_side.jpg');

const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
`;
const Title = styled.div`
`;
const MobileHeaderImage = styled.img`
    border-radius: 20px;
    width: 40%;
    margin: 20px auto;
    ${({theme}) => breakpoint('lg', theme.breakpoints)`
        display: none;
    `}
`;
const LeftSide = styled.div`
    box-sizing: border-box;
    padding: 20px;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    ${({theme}) => breakpoint('lg', theme.breakpoints)`
        display: flex;
        flex-direction: column;
        float: left;
        width: calc(100% - 580px);
        height: 100%;
    `}
`;
const RightSide = styled.img`
    display: none;
    ${({theme}) => breakpoint('lg', theme.breakpoints)`
        position: absolute;
        right: 0;
        display: block;
        width: 580px;
        height: 100%;
    `}
`;
const StyledSocial = styled.a`
    margin: 0 20px;
    color: black;
`;
const StyledSpan = styled.span`
    color: blue;
`;
const StyledTypist = styled(Typist)`
    display: inline;
`;
const SocialWrapper = styled.div`
    width: 100%;
`;

export class Home extends React.Component {
    render() {
        const social = ['frontend developer', 'runner', 'swimmer'];
        const getSocial = social.map( s => {
            return (
                <span key={s}>
                    <span> {s}</span>
                    <Typist.Backspace count={s.length} delay={500} />
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

        const cursor = {
            hideWhenDone: true
        };

        return (
            <Wrapper>
                <LeftSide>
                    <Title>
                        <MobileHeaderImage src={left} />
                        <h1>Hello, I am Bogdan and I am a 
                             <StyledSpan>
                                <StyledTypist cursor={cursor}>
                                    {getSocial}
                                    <span> cyclist</span>
                                </StyledTypist>
                            </StyledSpan>
                        </h1>
                    </Title>
                    <SocialWrapper>
                        {generateSocialLinks}
                    </SocialWrapper>
                </LeftSide>
                <RightSide src={right}/>
            </Wrapper>
        );
    }
}