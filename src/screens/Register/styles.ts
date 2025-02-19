import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 20px;
`;

export const LogoContainer = styled.View`
  margin-top: 50px;
  margin-bottom: 40px;
  align-items: center;
`;

export const FormContainer = styled.View`
  width: 100%;
  max-width: 320px;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
`;
