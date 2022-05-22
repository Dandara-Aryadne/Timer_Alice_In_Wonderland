import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import rabbit3 from "./IMG/rabbit3.png";
import alice from "./IMG/alice.png";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${rabbit3});
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 600px) {
    background-image: url(${alice});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
  }
`;

const Main = styled.div`
  border-radius: 15px;
  width: 30%;
  height: 40vh;
  background-color: #f5fcff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 50vw;
  @media (max-width: 600px) {
    background-color: transparent;
    margin-left: 60vw;
  }
`;

const H1 = styled.h1`
  @media (max-width: 600px) {
    margin-bottom: 10vh;
  }
`;

const Section = styled.div`
  width: 25vw;
  display: flex;
  justify-content: space-between;
  @media (max-width: 600px) {
    margin-bottom: 40vh;
  }
`;

const Button = styled.button`
  background-color: rgb(155, 218, 253);
  box-shadow: 2px 2px 8px #5a20c1;
  width: 7vw;
  height: 6vh;
  border: none;
  border-radius: 6px;
  color: #191a18;
  font-size: 2vw;
  font-family: "Sansita Swashed", cursive;
`;

export default class Clock extends React.Component {
  state = {
    number: 0
  };

  add = () => {
    const Run = setInterval(() => {
      this.setState({ number: this.state.number + 1 });
    }, 1000);

    this.stop = () => {
      clearInterval(Run);
    };
  };

  down = () => {
    this.setState({ number: 0 });
  };

  render() {
    return (
      <Container>
        <GlobalStyle />
        <Main>
          <H1>{this.state.number}</H1>
          <Section>
            <Button onClick={this.add}>Up</Button>
            <Button onClick={this.stop}>Stop</Button>
            <Button onClick={this.down}>Down</Button>
          </Section>
        </Main>
      </Container>
    );
  }
}
