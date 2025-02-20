import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const CameraWrapper = styled.View`
  width: 100%;
  height: 70%;
  border-radius: 10px;
  overflow: hidden;
  background-color: black;
`;
