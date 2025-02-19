import React from "react";
import styled from "styled-components/native";

const LinkContainer = styled.TouchableOpacity`
  margin-top: 10px;
`;

const StyledLinkText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  text-decoration: underline;
`;

interface LinkTextProps {
  title: string;
  onPress: () => void;
}

export function CustomLinkText({ title, onPress }: LinkTextProps) {
  return (
    <LinkContainer onPress={onPress}>
      <StyledLinkText>{title}</StyledLinkText>
    </LinkContainer>
  );
}
