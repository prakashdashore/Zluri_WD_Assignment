import React from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";
import hero from "../images/my_pick (1).png"
import bg from "../images/hero-bg.svg"

const Header = () => {
    return (
        <StyledWrapper>
            <StyledContainer >
                <QuestionsGrid>
                <Title>
                    <h3>
                        Hey! 👋
                    </h3>
                    <h1>
                        Prakash Dashore<br />
                        
                    </h1>
                    <p>
                    A diligent Electronics and communication undergraduate with innovative technical skills, always believe in adopting most optimistic approach of problem solving.I am a quick learner and good observer,and always like to take initiatives and having good leadership qualities. My area of expertise are in  HTML5,CSS, DBMS, JAVASCRIPT. i am enthusiastic to work in the field of web development as well as MERN Stack. I am always ready to face new challenges or seeking a new opportunity in my life. I like to explore my skills and stay updated about the technologies that helps me to thrive my career.
                    </p>
                </Title>
                    <ImageDiv>
                        <img src={hero} alt="hero" />
                    </ImageDiv>
                </QuestionsGrid>
            </StyledContainer>
        </StyledWrapper>
    );
}


export default Header
const StyledWrapper = styled(Wrapper)`
padding:160px 0 80px;
background-image: url(${bg});
background-repeat: no-repeat;
    background-size: cover;
`
const Title = styled.div`
margin-bottom:40px;
h1{
    font-family: Lexend Semibold;
    line-height: 40px;
    font-size:32px;
    color: #FFFFFF;
}
h3{
    font-family: Lexend Semibold;
    font-size:32px;
    color: #FFFFFF;
}
p{
    font-family: Lexend Regular;
    font-size:20px;
    color: #FFFFFF;
}
`
const QuestionsGrid = styled.div`
display:grid;
grid-template-columns: 2fr 1fr;
grid-gap:20px;
@media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`
const StyledContainer = styled(Container)`
margin-top:0;
`
const ImageDiv = styled.div`
img{
    margin-top:-120px;
    width:500px;
    hight: 400px;
}
`