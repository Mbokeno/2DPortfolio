import React from "react";
import { HeroCardInnerHeading,HeroCardInnerText,TextContainer,HeroContainer, HeroSection, HeroCard, HorizontalLine, HeroCardImg, Information, Title, Section, HorizontalLineInner, InnerHeading, InnerText, List, ContactSection} from "../styles";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

//This function creates the tags for the languages
const AdaptiveBackgroundText = ({ children }) => {
  return <TextContainer whileHover={{ scale: 1.1 }}>{children}</TextContainer>;
};



const Hero = () => {
  //Framer motion animations for the border around the text and the text/lines themselves. We use stagger so everything loads in from top down
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.05,
            duration: 1,
            ease: "easeInOut"
          }
        }
      };
    
    //Everything comes in from the left
      const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { 
            duration: 0.5,
            ease: "easeOut"
          }
        }
      };
    
    return(
        <HeroSection>
            <Navbar/>
            <HeroContainer>
                    <HeroCard
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    >
                        <HeroCardImg variants={itemVariants} src="/2DPortfolio/img/ProfilePicture.JPG"/>
                        <HeroCardInnerHeading variants={itemVariants}>Bryan Bokino (he/him)</HeroCardInnerHeading>
                        <HeroCardInnerText variants={itemVariants}>I am an undergraduate student at UMD looking for software development opportunities. I enjoy working on new projects and mastering the necessary skills to ensure that everything I produce exceeds the expected standard.</HeroCardInnerText>
                    </HeroCard>
                    <HorizontalLine/>
                    <Information
                     variants={containerVariants}
                     initial="hidden"
                     animate="visible"
                    >
                        <Title variants={itemVariants}>Current Projects</Title>
                        <HorizontalLine variants={itemVariants}/>
                        <Section>
                            <InnerHeading variants={itemVariants}>Roblox Game</InnerHeading>
                            <HorizontalLineInner variants={itemVariants}/>
                            <InnerText variants={itemVariants}>Working on developing a Roblox game currently with a team of people as one of the lead scripter</InnerText>
                            <List variants={itemVariants}><AdaptiveBackgroundText>Lua</AdaptiveBackgroundText></List>
                            
                            
                            <InnerHeading variants={itemVariants}>Real Time Chat App </InnerHeading>
                            <HorizontalLineInner variants={itemVariants}/>
                            <InnerText variants={itemVariants}>Creating a realtime chat app as a personal project</InnerText>
                            <List variants={itemVariants}><AdaptiveBackgroundText>JavaScript</AdaptiveBackgroundText> <AdaptiveBackgroundText>React Library</AdaptiveBackgroundText> <AdaptiveBackgroundText>Socket.io</AdaptiveBackgroundText></List>
                        </Section>
                        <Title variants={itemVariants}>Past Projects</Title>
                        <HorizontalLine variants={itemVariants}/>
                        <Section>
                            <InnerHeading variants={itemVariants}>Document Editor</InnerHeading>
                            <HorizontalLineInner variants={itemVariants}/>
                           <InnerText variants={itemVariants}>Developed a C program that simulates a document management system where you can create
                            documents, save them, and load in documents to manipulate.</InnerText> 
                            <List variants={itemVariants}><AdaptiveBackgroundText>C</AdaptiveBackgroundText></List>

                            <InnerHeading variants={itemVariants}>Calendar</InnerHeading>
                            <HorizontalLineInner variants={itemVariants}/>
                           <InnerText variants={itemVariants}>Developed a C program that simulates a calendar where you can add events and remove events in a
                           number of ways.</InnerText> 
                           <List variants={itemVariants}><AdaptiveBackgroundText>C</AdaptiveBackgroundText></List>

                            <InnerHeading variants={itemVariants}>PokeVote</InnerHeading>
                            <HorizontalLineInner variants={itemVariants}/>
                            <InnerText variants={itemVariants}>Developed a website that allows the user to vote whether or not they like different pokemon and it shows them
                                how other users have voted as well
                            </InnerText>
                            <List variants={itemVariants}><AdaptiveBackgroundText>HTML</AdaptiveBackgroundText> <AdaptiveBackgroundText>JavaScript</AdaptiveBackgroundText></List>

                            <InnerHeading variants={itemVariants}>PingPong</InnerHeading>
                            <HorizontalLineInner variants={itemVariants}/>
                            <InnerText variants={itemVariants}>Developed a pingpong game </InnerText>
                            <List variants={itemVariants}><AdaptiveBackgroundText>Java</AdaptiveBackgroundText></List>
                            </Section>
                        
                        <Title  variants={itemVariants}>Technical Skills</Title>
                        <HorizontalLine variants={itemVariants}/>
                        <Section>
                        <InnerHeading variants={itemVariants}>Languages</InnerHeading>
                        <HorizontalLineInner variants={itemVariants}/>
                        <List variants={itemVariants}><AdaptiveBackgroundText>Java</AdaptiveBackgroundText><AdaptiveBackgroundText>Python</AdaptiveBackgroundText><AdaptiveBackgroundText>HTML</AdaptiveBackgroundText><AdaptiveBackgroundText>Lua</AdaptiveBackgroundText><AdaptiveBackgroundText>C</AdaptiveBackgroundText><AdaptiveBackgroundText>JavaScript</AdaptiveBackgroundText><AdaptiveBackgroundText>SQL</AdaptiveBackgroundText><AdaptiveBackgroundText>C++</AdaptiveBackgroundText></List>
                        <InnerHeading variants={itemVariants}>Tools</InnerHeading>
                        <HorizontalLineInner variants={itemVariants}/>
                        <List variants={itemVariants}><AdaptiveBackgroundText>Blender</AdaptiveBackgroundText><AdaptiveBackgroundText>Eclipse IDE</AdaptiveBackgroundText><AdaptiveBackgroundText>VSCode</AdaptiveBackgroundText><AdaptiveBackgroundText>Pycharm</AdaptiveBackgroundText><AdaptiveBackgroundText>Mobaxterm</AdaptiveBackgroundText></List>
                        </Section>
                        <Title  variants={itemVariants}>Contact Section</Title>
                        <HorizontalLine variants={itemVariants}/>
                        <ContactSection>
                           <motion.h4 variants={itemVariants}>Email: bryanbokino@outlook.com</motion.h4>
                        </ContactSection>
                    </Information>
            </HeroContainer>
        </HeroSection>
    )
}

export default Hero