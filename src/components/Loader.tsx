import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";

const LoaderContainer = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export function Loader() {
  return (
    <LoaderContainer>
      <ActivityIndicator size="large" color="#FFF" />
    </LoaderContainer>
  );
}
