import React, { useEffect, useRef } from "react";

import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import { YinYang } from "./AllSvgs";
import Card from '../subComponents/Card';
import BigTitle from '../subComponents/BigTitle';

import workDataArray from "../data/WorkData";

import styled, { ThemeProvider } from "styled-components";
import { motion } from 'framer-motion';
import { darkTheme } from "./Themes";


const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};

  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
`

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;
`

const Rotation = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`
// Framer-motion configuration
const container = {

  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    }
  }
};

const WorkPage = () => {

  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`
      
      return (yinyang.current.style.transform = 
        `rotate(` + -window.pageYOffset + 'deg)')
    }

    window.addEventListener('scroll', rotate)

    return () =>  { 
      window.removeEventListener('scroll', rotate);
      console.log("DISMOUNT_EVENTLISTENER!")
    }
  }, []);
  
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ opacity: 0 }}
      >
        <LogoComponent theme="dark" />
        <PowerButton />
        <Main 
          ref={ref} 
          variants={container} 
          initial="hidden" 
          animate="show"
        >
          {workDataArray.map((workObject) => (
            <Card key={workObject.id} data={workObject} />
          ))}
        </Main>
        <Rotation ref={yinyang}>
          <YinYang width={80} height={80} fill={darkTheme.text} />
        </Rotation>
        <BigTitle text="WORK" top="10%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
