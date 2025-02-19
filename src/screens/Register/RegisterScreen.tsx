import React from "react";
import { View, Image, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useRegister } from "../../services/user";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { CustomLinkText } from "../../components/LinkText";
import { Container, LogoContainer, FormContainer } from "./styles";

interface RegisterFormData {
  fullName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function RegisterScreen() {
  const { control, handleSubmit, watch } = useForm<RegisterFormData>();
  const registerMutation = useRegister();

  const onSubmit = (data: RegisterFormData) => {
    if (data.password !== data.confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return;
    }

    registerMutation.mutate(data, {
      onSuccess: () => {
        Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
      },
      onError: () => {
        Alert.alert("Erro", "Não foi possível realizar o cadastro.");
      },
    });
  };

  return (
    <Container>
    

      <FormContainer>
        <Controller
          control={control}
          name="fullName"
          render={({ field }) => <Input placeholder="Nome Completo" onChangeText={field.onChange} value={field.value} />}
        />

        <Controller
          control={control}
          name="username"
          render={({ field }) => <Input placeholder="Qual seu nome de usuario?" onChangeText={field.onChange} value={field.value} />}
        />

        <Controller
          control={control}
          name="email"
          render={({ field }) => <Input placeholder="Escolha seu melhor email" onChangeText={field.onChange} value={field.value} keyboardType="email-address" />}
        />

        <Controller
          control={control}
          name="password"
          render={({ field }) => <Input placeholder="Senha" onChangeText={field.onChange} value={field.value} secureTextEntry />}
        />

        <Controller
          control={control}
          name="confirmPassword"
          render={({ field }) => <Input placeholder="Digite novamente sua Senha" onChangeText={field.onChange} value={field.value} secureTextEntry />}
        />

        <Button title="Cadastrar" onPress={handleSubmit(onSubmit)} />

        <CustomLinkText title="Já tem uma conta? Faça login" onPress={() => {}} />
      </FormContainer>
    </Container>
  );
}
