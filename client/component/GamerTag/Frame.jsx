import React from 'react';
import styled from "styled-components";

// const TempOuterContainer = styled.div`
//     width: 1350px;
//     height: 880px;
// `;

// const TempInnerContainer = styled.div`
//     height: 27%;
// `;

const Container = styled.div`
    display: block;
    width: 42.2%;
    height: 90.1%;
    margin-top: 0;
    margin-right: 1vw;
    margin-bottom: 1vw;
    border: 1px solid #22cac9;
    background-color: #24205a;
`;

const GamerInfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    width: 100%;
    height: 100%;
`;

const AvatarFrame = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    max-width: 30%;
    height: 80%;
    margin-right: 5%;
`;

const Avatar = styled.img`
    max-width: 85%;
    height: auto;
    border-radius: 50%;
`;

const GamerTagFrame = styled.div`
    justify-content: left;
    align-items: center;
    max-width: 60%;
    height: auto;
`;

const GamerTag = styled.h1`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.65vw;
    color: white;
    height: auto;
    margin-bottom: 0px;
    margin-top: 12%;
`;

const Points = styled.h2`
    font-family: "Montserrat", sans-serif;
    color: white;
    height: auto;
    font-size: 4vw;
    margin-top: .5vw;
    margin-bottom: 0;
`;

class Frame extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<Container>
                  <GamerInfoContainer>
                        <AvatarFrame>
                            <Avatar src="./src/avatar.png" />
                        </AvatarFrame>
                        <GamerTagFrame>
                            <GamerTag>XBOX GAMERTAG</GamerTag>
                            <Points>2300</Points>
                        </GamerTagFrame>
                  </GamerInfoContainer>
              </Container>);
    }
}

export default Frame;