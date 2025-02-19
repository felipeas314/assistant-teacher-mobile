import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 20px;
`;

export const LogoContainer = styled.View`
  margin-top: 50px;  // Adiciona mais espaço no topo
  margin-bottom: 40px;  // Ajusta a distância entre a imagem e o formulário
  align-items: center;
`;

export const FormContainer = styled.View`
  width: 100%;
  max-width: 320px;
  align-items: center;
  margin-top: 100px;
`;
