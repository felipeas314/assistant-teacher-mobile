import React from "react";
import styled from "styled-components/native";

const StyledButton = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 14px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
`;

const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.buttonText};
  font-size: 16px;
  font-weight: bold;
`;

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export function Button({ title, onPress }: ButtonProps) {
  return (
    <StyledButton onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </StyledButton>
  );
}
