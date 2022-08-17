import React from 'react';

import Particles from 'react-particles-js';
import styled from 'styled-components';

// particle config filesystem
import configDark from "../config/particlesjs-config.json";
import configLight from "../config/particlesjs-config-light2.json";

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`

const ParticleComponent = (props) => {

  return (
    <Box>
      <Particles 
        params={props.theme === "light" ? configLight : configDark} 
        style={{position: 'absolute', top: 0}}
      />
    </Box>
  );
};

export default ParticleComponent;