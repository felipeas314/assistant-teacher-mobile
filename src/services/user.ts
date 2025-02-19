import { useMutation } from "@tanstack/react-query";
import { api } from "./api";

interface RegisterData {
  fullName: string;
  username: string;
  email: string;
  password: string;
}

const registerUser = async (data: RegisterData) => {
  const response = await api.post("/register", data);
  return response.data;
};

export const useLogin = () =>
    useMutation({
      mutationFn: registerUser, // Função responsável pelo login
      onSuccess: (data) => {
        console.log('Cadastro bem-sucedido:', data);
      },
      onError: (error) => {
        console.error('Erro no cadastro:', error);
      },
    });
