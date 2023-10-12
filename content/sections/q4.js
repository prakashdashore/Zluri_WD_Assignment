import React from "react";
import styled from "styled-components";
import { Container, Wrapper } from "./style";
import dropdown from "../images/dropdown-trial.png";
import Customcomponent from "./projects/customComponent/Customcomponent";

const Q3 = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <Title>
          <h3>
            <span>Task 4:</span> Build a component
          </h3>
          <p>
            In this section, you are required to build a new component based on
            a Figma design and prototype. The component's function should be to
            change the image displayed based on the item selected in the
            dropdown. Implement this functionality using HTML, CSS, and
            JavaScript.
          </p>
        </Title>
        <QuestionsGrid>
          <AnswerDiv>
            <Customcomponent />
          </AnswerDiv>
        </QuestionsGrid>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default Q3;

const StyledWrapper = styled(Wrapper)`
  background: #f6f7f9;
`;
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
const ImageDiv = styled.div`
  img {
    width: 300px;
  }
`;
const AnswerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    margin-top: 50px;
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
