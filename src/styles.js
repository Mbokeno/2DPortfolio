import styled from 'styled-components'
import { motion } from 'framer-motion';
import React from 'react';

export const HorizontalLine = styled(motion.div)`
  width: 50%; // Full width of parent
  height: 1px; // Thickness of the line
  background-color: white; // Color of the line
  margin: 10px 0; // Vertical spacing
`;

export const HorizontalLineInner = styled(motion.div)`
  width: 25%; // Full width of parent
  height: 1px; // Thickness of the line
  background-color: white; // Color of the line
  margin-left: 10%;
`;

export const InnerHeading = styled(motion.h4)`
margin-left: 10%;
font-size: medium;
color: white;
`
export const ScriptTag = styled(motion.div)`
height: 10px;
width: 10px;
background-color: #002D03;
color: white;
border-radius: 10px;
`

export const InnerText = styled(motion.p)`
margin-left: 10%;
color: white;
`

export const Title = styled(motion.h2)`
color: white;
margin-top: 25px;
`
export const HeroSection = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const HeroContainer = styled.div`
  width: 1400px;
  max-width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`
export const HeroCard = styled(motion.div)`
width: 50%;
height: 20%;
background-color: transparent;
border: 2px solid white;
border-radius: 20px;
display: flex;
`

export const Information = styled(motion.div)`
  width: 50%;
  min-height: 100vh;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

export const HeroCardImg = styled(motion.img)`
  width: 100px;
  height: 100px;
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
`

export const Section = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  color: white;
  gap: 5px; // Reduced gap between elements
`;
export const ContactSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 5px; // Reduced gap between elements
`
export const AppSection = styled.div`
  height: 100vh;
  color: purple;
  background: url("/2DPortfolio/img/bg.png");
  background-size: cover;
  background-position: center;
  overflow-y: auto;
  &::-webkit-scrollbar{
    display: none;
  }
`

export const NavbarSection = styled.div`
    display: flex;
    justify-content: center;
`

export const NavbarContainer = styled.div`
    width:1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Links = styled.div`
display: flex;
align-items: center;
gap: 40px;
`

export const Icons = styled.div`
display: flex;
gap: 20px;
align-items: center;
`
export const Logo = styled.img`
height: 50px;
`
export const List = styled(motion.ul)`
  gap: 10px;
  row-gap: 10px;
  list-style: none;
  padding: 0;
  margin: 1px 0 0 10%; // Reduced top margin and added left margin to align with InnerText
  display: flex;
  flex-wrap: wrap;
`;
export const ListItem = styled.li`
cursor: pointer;
`

export const Icon = styled.img`
height: 20px;
width: 20px;
cursor: pointer;
`

export const Button = styled.button`
width: 100px;
padding: 10px;
background-color: palevioletred;
color: white;
border-radius: 5px;
border: none;
cursor: pointer;
`

export const TextContainer = styled(motion.span)`
  display: inline-block;
  background-color: #002D03;
  color: white;
  font-style: italic;
  padding: 5px 10px;
  margin-top: 5px;
  
  border-radius: 5px;
  font-size: 16px;
  line-height: 1.5;
  white-space: nowrap;
  cursor: pointer;
`;