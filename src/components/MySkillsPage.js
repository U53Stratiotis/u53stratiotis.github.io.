import React from 'react';

import LogoComponent from '../subComponents/LogoComponent';
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent"

import BigTitle from "../subComponents/BigTitle";
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from './Themes';
import { Design, Develope } from './AllSvgs';

import { motion } from 'framer-motion';

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center; 
  font-size: calc(1em + 2vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
 

  ${Main}:hover & {color: ${(props) => props.theme.body}};

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
  `

const MySkillsPage = () => {

  return (
    <ThemeProvider theme={lightTheme}>
      <Box
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <LogoComponent theme="light"/>
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />
        <Main>
          <Title>
            <Design width={40} height={40} />
          </Title>
          <Description>
            Currently teaching myself how to create websites, which relate to a
            practical and clean design.
          </Description>
          <Description>
            <strong>I like to design</strong>
            <ul>
              <li>Websites</li>
              <li>Web Applications</li>
            </ul>
          </Description>
          <Description>
            <strong>Tools</strong>
            <ul>
              <li>-</li>
            </ul>
          </Description>
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={40} />
          </Title>
          <Description>
            I love to be able to translate ideas into actual code. My goal is to
            realise this trough front end & back end development.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>CSS, HTML, JavaScript, ReactJS, C#, Python.</p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VScode, GitHub, Pycharm.</p>
          </Description>
        </Main>
        <BigTitle text="SKILLS" top="80%" right="33%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;