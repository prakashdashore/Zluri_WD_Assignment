import React from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";

const S1 = () => {
    
    return (
        <StyledWrapper>
            <Container >
                <Title>
                    <h4>

                        Solution Here

                    </h4>
                    <p>Answer below this.</p>
                </Title>

                <FlexColumn>


                        <FlexRow>
                            <FlexItem>
                                1st
                            </FlexItem>
                            <FlexItem>
                                2nd
                            </FlexItem>
                        </FlexRow>
                        <FlexRow>
                            <FlexItem>
                                3rd
                            </FlexItem>
                            <FlexItem>
                                4th
                            </FlexItem>
                        </FlexRow>
                        <FlexRow>
                            <FlexItem>
                                3rd
                            </FlexItem>
                            <FlexItem>
                                4th
                            </FlexItem>
                        </FlexRow>
                        <FlexRow>
                            <FlexItem>
                                3rd
                            </FlexItem>
                            <FlexItem>
                                4th
                            </FlexItem>
                        </FlexRow>
                        <FlexRow>
                            <FlexItem>
                                3rd
                            </FlexItem>
                            <FlexItem>
                                4th
                            </FlexItem>
                        </FlexRow>
                        <FlexRow>
                            <FlexItem>
                                3rd
                            </FlexItem>
                            <FlexItem>
                                4th
                            </FlexItem>
                        </FlexRow>
                        <FlexRow>
                            <FlexItem>
                                3rd
                            </FlexItem>
                            <FlexItem>
                                4th
                            </FlexItem>
                        </FlexRow>
                        <FlexRow>
                            <FlexItem>
                                3rd
                            </FlexItem>
                            <FlexItem>
                                4th
                            </FlexItem>
                        </FlexRow>




                    </FlexColumn>



            </Container>
        </StyledWrapper>
    )
}

export default S1

const StyledWrapper = styled(Wrapper)`
background:#F6F7F9;
`

const Title = styled.div`
h4{
    font-size: 32px;
font-family: Lexend Medium;
font-style: normal;
font-weight: 500;
line-height: 40px;
letter-spacing: -0.4px;
    span{
        background:#FAE090;
    }
}
p{
    font-size: 18px;
font-family: Lexend Regular;
font-style: normal;
font-weight: 400;
line-height: 28px;
}
`
const QuestionsDiv = styled.div`
ul{
    display:flex;
    flex-direction:column;
}
li{
    font-size:20px;
}
`


const FlexColumn = styled.div`
display:Grid;
grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
gap:25px;
`
const FlexRow = styled.div`
display:flex;
flex-direction:row;
gap:20px;
`
const FlexItem = styled.div`
padding:80px;
background:#FFFFFF;
border: 1px solid #000000;
border-radius: 20px;
`
