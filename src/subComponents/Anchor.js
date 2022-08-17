import { React, useRef, useEffect, useCallback } from 'react';

import { Link, Anchor } from "../components/AllSvgs";
import styled from "styled-components";


const Container = styled.div`
  position: relative;
`
const Slider = styled.div`
  position: fixed;
  top: 0;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateY(-100%);

  .chain {
    transform: rotate(135deg);
  }
`
// const PreDisplay = styled.div`
//   position: absolute;
//   top: 0;
//   right: 2rem;
// `

const AnchorComponent = (props) => {

  const ref = useRef(null);
  const hiddenRef = useRef(null);
  
  useEffect(() => {

    const handleScroll = () => {
      console.log("RUN");
      let scrollPosition = window.pageYOffset;
      let windowSize = window.innerHeight;
      let bodyHeight = document.body.offsetHeight;

      let diff = Math.max(bodyHeight - (scrollPosition + windowSize));
      // diff*100/scrollposition
      let diffP = (diff * 100) / (bodyHeight - windowSize);

      ref.current.style.transform = `translateY(${-diffP}%)`;
      // Accesing style from ref.current gives type error. Fix this
      
      // React will assign the current property with the DOM element when the component mounts, 
      // and assign it back to null when it unmounts. 
      // ref updates happen before componentDidMount or componentDidUpdate lifecycle methods.

      //   if (window.pageYOffset > 25) {
      //     hiddenRef.current.style.display = "none";
      //   } else {
      //     hiddenRef.current.style.display = "block";
      //   }
    }
    
    window.addEventListener("scroll", handleScroll)
  
    return () =>  {
      console.log("UNMOUNT");
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);
  

  return (
    <Container>
      {/* <PreDisplay ref={hiddenRef} className="hidden">
        <Anchor width={70} height={70} fill="currentColor" />
      </PreDisplay> */}
      <Slider ref={ref}>
        {[...Array(props.numbers)].map((x, id) => {
          return (
            <Link
              key={id}
              width={35}
              height={25}
              fill="currentColor"
              className="chain"
            />
          );
        })}
        <Anchor width={70} height={70} fill="currentColor" />
      </Slider>
    </Container>
  );
};

export default AnchorComponent;