import { useMutation } from "@tanstack/react-query";
import { api } from "./api";

interface UploadResponse {
  success: boolean;
  message: string;
}

const uploadImageRequest = async (imageUri: string) => {
  const formData = new FormData();
  formData.append("image", {
    uri: imageUri,
    name: "question.jpg", // Nome do arquivo
    type: "image/jpeg", // Tipo do arquivo
  });

  const response = await api.post("/questions/solve", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const useUploadImage = () =>
    useMutation({
      mutationFn: uploadImageRequest, // Função responsável pelo login
      onSuccess: (data) => {
        console.log('Upload bem-sucedido:', data);
      },
      onError: (error) => {
        console.error('Erro no upload:', error);
        console.log(error)
      },
    });
