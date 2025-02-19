import React from "react";
import { View, Image, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useLogin } from "../../services/login";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { CustomLinkText } from "../../components/LinkText";
import { Container, LogoContainer, FormContainer } from "./styles";

interface LoginFormData {
  username: string;
  password: string;
}

export default function LoginScreen() {
  const { control, handleSubmit } = useForm<LoginFormData>();
  const loginMutation = useLogin();

  const onSubmit = (data: LoginFormData) => {
    loginMutation.mutate(data, {
      onSuccess: (response) => {
        Alert.alert("Login realizado!", `Token: ${response.token}`);
      },
      onError: () => {
        Alert.alert("Erro", "Usuário ou senha incorretos.");
      },
    });
  };

  return (
    <Container>
      {/* Espaço para a Imagem */}
      {/*<LogoContainer>
        <Image source={require("../../../assets/login-image.png")} style={{ width: 150, height: 150 }} />
      </LogoContainer>*/}

      {/* Formulário de Login */}
      <FormContainer>
        <Controller
          control={control}
          name="username"
          render={({ field }) => <Input placeholder="Username" onChangeText={field.onChange} value={field.value} />}
        />

        <Controller
          control={control}
          name="password"
          render={({ field }) => <Input placeholder="Password" onChangeText={field.onChange} value={field.value} secureTextEntry />}
        />

        <Button title="Login" onPress={handleSubmit(onSubmit)} />

        <CustomLinkText title="Criar uma conta" onPress={() => {}} />
        <CustomLinkText title="Esqueci minha senha" onPress={() => {}} />
      </FormContainer>
    </Container>
  );
}
