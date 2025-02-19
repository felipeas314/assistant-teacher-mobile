import React from "react";
import styled from "styled-components/native";
import { TextInputProps } from "react-native";

const InputContainer = styled.View`
  width: 100%;
  margin-bottom: 12px;
`;

const StyledInput = styled.TextInput`
  width: 100%;
  padding: 14px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
`;

interface InputProps extends TextInputProps {
  placeholder: string;
}

export function Input({ placeholder, ...rest }: InputProps) {
  return (
    <InputContainer>
      <StyledInput placeholder={placeholder} placeholderTextColor="#AAA" {...rest} />
    </InputContainer>
  );
}
