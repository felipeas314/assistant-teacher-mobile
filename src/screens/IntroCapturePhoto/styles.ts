import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 20px;
`;

export const Illustration = styled.Image`
  width: 100%;
  max-width: 300px;
  height: 300px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: 10px;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  padding: 0 10px;
  line-height: 22px;
  margin-bottom: 20px;
`;

export const ButtonWrapper = styled.View`
  width: 100%;
  max-width: 320px;
`;
