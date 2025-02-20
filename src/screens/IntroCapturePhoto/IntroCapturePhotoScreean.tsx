import React from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Container, Title, Subtitle, Illustration, ButtonWrapper } from "./styles";
import { Button } from "../../components/Button";

export default function CameraIntroScreen() {
  const navigation = useNavigation();

  return (
    <Container>
      {/* Ilustração no topo */}
      <Illustration source={require("../../assets/camera-intro.png")} resizeMode="contain" />

      {/* Título e explicação */}
      <Title>Como tirar a foto?</Title>
      <Subtitle>
        Para garantir a melhor precisão, tire uma foto **apenas de uma questão**.{"\n"}
        Evite sombras, reflexos e ângulos tortos para que a IA possa ler corretamente.
      </Subtitle>

      {/* Botão para prosseguir */}
      <ButtonWrapper>
        <Button title="Entendi, Continuar" onPress={() => navigation.navigate("CameraCapture")} />
      </ButtonWrapper>
    </Container>
  );
}
