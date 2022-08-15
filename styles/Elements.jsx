import styled, { createGlobalStyle } from "styled-components"
import { motion } from "framer-motion"

export const GlobalStyles = createGlobalStyle`


html, body {
  padding: 0;
  margin: 0;
  overflow-x: hidden !important;
  background-color: #f8f0f0;

}

* {
  box-sizing: border-box;
  /*font-family: 'win99';*/
}

.wrapper {
  display: inline-flex;
}

.wrapper .icon {
  position: relative;
  background-color: #3f6b81;
  border: #fafafa 1px solid;
  border-radius: 50%;
  padding: 15px;
  margin: 10px;
  width: 50px;
  height: 50px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip {
  position: absolute;
  top: 0;
  font-size: 14px;
  background-color: #dedede;
  color: #dedede;
  padding: 5px 8px;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip::before {
  position: absolute;
  content: "";
  height: 8px;
  width: 8px;
  background-color: #dedede;
  bottom: -3px;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon:hover .tooltip {
  top: -45px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.wrapper .icon:hover span,
.wrapper .icon:hover .tooltip {
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}

.wrapper .facebook:hover,
.wrapper .facebook:hover .tooltip,
.wrapper .facebook:hover .tooltip::before {
  background-color: #111111;
  color: #ffffff;
}

.wrapper .twitter:hover,
.wrapper .twitter:hover .tooltip,
.wrapper .twitter:hover .tooltip::before {
  background-color: #111111;
  color: #ffffff;
}

.wrapper .instagram:hover,
.wrapper .instagram:hover .tooltip,
.wrapper .instagram:hover .tooltip::before {
  background-color: #111111;
  color: #ffffff;
}

.wrapper .github:hover,
.wrapper .github:hover .tooltip,
.wrapper .github:hover .tooltip::before { 
  background-color: #111111;
  color: #ffffff;
}

.wrapper .youtube:hover,
.wrapper .youtube:hover .tooltip,
.wrapper .youtube:hover .tooltip::before {
  background-color: #111111;
  color: #ffffff;
} 


  `;


export const Div = styled(motion.div)`
    padding-top: ${(props) => props.pt || ""};
    padding-left: ${(props) => props.pl || ""};
    padding-right: ${(props) => props.pr || ""};
    height: ${(props) => props.height || ""};
    width: ${(props) => props.width || ""};
    background-color: ${(props) => props.bg || ""};
    position: ${(props) => props.position || ""};
    @media screen and (min-width: 768px) {
    height: ${(props) => props.heightmd || ""};
    width: ${(props) => props.widthmd || ""};
  }
`

export const Section = styled(motion.section)`
    padding-top: ${(props) => props.pt || ""};
    padding-left: ${(props) => props.pl || ""};
    padding-right: ${(props) => props.pr || ""};
    height: ${(props) => props.height || ""};
    width: ${(props) => props.width || ""};
    background-color: ${(props) => props.bg || ""};
    position: ${(props) => props.position || ""};
    @media screen and (min-width: 768px) {
    height: ${(props) => props.heightmd || ""};
    width: ${(props) => props.widthmd || ""};
  }
`

export const Span = styled(motion.span)`
    padding-top: ${(props) => props.pt || ""};
    padding-left: ${(props) => props.pl || ""};
    padding-right: ${(props) => props.pr || ""};
    height: ${(props) => props.height || ""};
    width: ${(props) => props.width || ""};
    background-color: ${(props) => props.bg || ""};
    position: ${(props) => props.position || ""};
`

export const Btn = styled(motion.button)`
    padding-top: ${(props) => props.pt || ""};
    padding-left: ${(props) => props.pl || ""};
    padding-right: ${(props) => props.pr || ""};
    height: ${(props) => props.height || ""};
    width: ${(props) => props.width || ""};
    background-color: ${(props) => props.bg || ""};
    position: ${(props) => props.position || ""};
    border-radius: ${(props) => props.br || ""};
    font-size: ${(props) => props.fs || ""};

`



