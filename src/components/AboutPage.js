import React from "react";

import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";

import spaceship from '../assets/Images/spaceship.png';

import BigTitle from "../subComponents/BigTitle";
import styled, { ThemeProvider, keyframes } from "styled-components";
import { darkTheme } from "./Themes";


import { motion } from 'framer-motion';

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`

// const floatUp = keyframes`
//   0% { transform: translateY(-0px) }
//   25% { transform: translateY(-25px translateX(25px)) }
//   50% { transform: translateY(-300px) }
//   75% { transform: translateY(-25px translateX(25px)) }
//   100% { transform: translateY(-0px) }
// `

const floatUp = keyframes`
  0% { transform: translateY(-0px) }
  15% { transform: translateY(-300px) translateX(80px) }
  30% { transform: translateY(-300px) translateX(-170px) }
  45% { transform: translateY(-0px) translateX(80px) }
  60% { transform: translateY(-0px) translateX(-170px) }
  100% { transform: translateY(-0px) }
`

const Spaceship = styled.div`
  position: absolute;
  top:  60%;
  right: 5%;
  width: 20vw;
  animation: ${floatUp} 60s ease infinite;

  img {
    width: 100%;
    height: auto;
  }
`

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;

  font-family: 'Ubutntu Mono', monospace;
  font-style: italic;
`

const AboutPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />
        <Spaceship>
          <img src={spaceship} alt="spaceman" />
        </Spaceship>
        <Main>
          I'm a procesoperator located in the Netherlands. Currently allot of my
          time is invested into learning React and building my own projects.
          <br /> <br />
          To my biggest joy I discovered my love for coding, which I basicly do
          every day.
          <br /> <br />
          Feel free to connect with me trough one of my social links, if you
          like what you see!
        </Main>
        <BigTitle text="ABOUT" top="5%" left="66%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
