import React from "react";
import { TouchableHighlight } from "react-native";

import { Wrapper, Container, Title, Option, Img, Label } from "./styled";

import focacciaImg from "../../images/focaccia.jpeg";
// import { TouchableHighlight } from "react-native-gesture-handler";

export default function Home() {
  return (
    <Wrapper>
      <Title>Receitas</Title>
      <Container>
        <Option>
          <Img source={focacciaImg} />
          <Label>Focaccia</Label>
        </Option>
        <Option>
          <Img source={focacciaImg} />
          <Label>Focaccia</Label>
        </Option>
        <Option>
          <Img source={focacciaImg} />
          <Label>Focaccia</Label>
        </Option>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert("Pressed!")}
        >
          <Img source={focacciaImg} />
        </TouchableHighlight>
      </Container>
    </Wrapper>
  );
}
