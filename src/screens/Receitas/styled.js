import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  background: #e5e5e5;
`;

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    margin: 40,
    marginVertical: 0,
    alignItems: "center",
  },
}))``;

export const Title = styled.Text`
  padding: 35px 40px;
  font-family: Roboto;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  text-align: left;
  color: #444444;
`;

export const Option = styled.TouchableOpacity`
  padding: 2px;
  width: 324px;
  height: 210px;
  margin-bottom: 10px;
`;

export const Img = styled.Image`
  width: 320px;
  height: 185px;
  border-radius: 3px;
`;

export const Label = styled.Text`
  text-align: right;
  font-family: Roboto;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;

  color: #000;
  padding-top: 3px;
`;
