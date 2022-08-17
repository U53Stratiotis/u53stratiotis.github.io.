import React from 'react';
import { darkTheme } from '../components/Themes';

import { motion } from 'framer-motion';
import styled from 'styled-components';

const Logo = styled(motion.h1)`
  display: inline-block;
  color: ${(props) =>
    props.theme === "dark" ? darkTheme.text : darkTheme.body};
  font-family: "Pacifico", cursive;

  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`;

const LogoComponent = (props) => {
  return (
    <Logo
      theme={props.theme}
      initial={{ 
        x: -100,
        y: -200,
        transform: "scale(0)" }}
      animate={{ 
        x: 0,
        y: 0,
        scale: [0, 1, 1.5, 1] }}
      transition={{ type: "spring", duration: 1.5, delay: 0 }}
    >
      JP
    </Logo>
  );
}

export default LogoComponent