import React, { useRef } from "react";
import styled from "styled-components";
import { Container, Wrapper } from "./style";

const Q3 = () => {
  const one = useRef();
  return (
    <StyledWrapper>
      <StyledContainer>
        <Title>
          <h3>
            <span>Task 3:</span> Build a dropdown
          </h3>
          <p>
            Your objective is to replicate the design and functionality of the
            given Figma design. Pay attention to details such as colors, fonts,
            and spacing to achieve a faithful representation of the design.
          </p>
        </Title>
        <QuestionsGrid>
          <AnswerDiv>
            <div>
              <select className="dropdown">
                <option className="options"  value="Mountain">Mountain</option>
                <option className="options" value="Forest">Forest</option>
                <option className="options" value="Ocean">Ocean</option>
                <option className="options" value="Desert">Desert</option>
              </select>
            </div>
          </AnswerDiv>
        </QuestionsGrid>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default Q3;

const StyledWrapper = styled(Wrapper)``;
const Title = styled.div`
  h3 {
    font-size: 32px;
    font-family: Lexend Medium;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: -0.4px;
    span {
      background: #fae090;
    }
  }
  p {
    font-size: 18px;
    font-family: Lexend Regular;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
  }
`;
const QuestionsGrid = styled.div``;
const StyledContainer = styled(Container)`
  margin-top: 0;
`;
const AnswerDiv = styled.div`
  font-family: Lexend Regular;
  display: flex;
  margin-top: 40px;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  .dropdown {
    boxsizing: border-box;
    border: 2px solid #2684fe;
    border-radius: 4px;
    background: #ffffff;
    min-width: 200px;
    height: 54px;
    padding:10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
  }
  .options{
    font-size: 16px;
    fontweight: 900;
    padding : 10px;
    
    color: black;
  }
  .options:hover{
    background: #2684fe;
    color: white;
  }
 

`;

const FigmaButton = styled.button`
  border-radius: 40px;
  border: 1px solid #2684fe;
  background: #2684fe;
  min-width: 150px;
  height: 54px;
  padding: 6px 14px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-family: Lexend Bold;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  cursor: pointer;
`;
const PrototypeButton = styled.button`
  border-radius: 40px;
  border: 1px solid #2684fe;
  background: #ffffff;
  min-width: 150px;
  height: 54px;
  padding: 6px 14px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  color: #2684fe;
  text-align: center;
  font-size: 16px;
  font-family: Lexend Bold;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  cursor: pointer;
`;
