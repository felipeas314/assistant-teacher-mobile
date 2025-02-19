import { useMutation } from "@tanstack/react-query";
import { api } from "./api";

interface LoginData {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

const loginUser = async (data: LoginData): Promise<LoginResponse> => {
  const response = await api.post("/login", data);
  return response.data;
};

export const useLogin = () =>
    useMutation({
      mutationFn: loginUser, // Função responsável pelo login
      onSuccess: (data) => {
        console.log('Login bem-sucedido:', data);
      },
      onError: (error) => {
        console.error('Erro no login:', error);
      },
    });
