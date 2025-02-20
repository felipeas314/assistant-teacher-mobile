import React from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useUploadImage } from "../../services/camera";
import { takePhoto } from "../../services/imagePicker";
import { Container } from "./styles";
import { Button } from "../../components/Button";
import { Loader } from "../../components/Loader";

export default function CameraCaptureScreen() {
  const navigation = useNavigation();
  const uploadMutation = useUploadImage();

  const handleTakePhoto = async () => {
    const imageUri = await takePhoto();
    if (imageUri) {
      uploadMutation.mutate(imageUri, {
        onSuccess: () => {
          Alert.alert("Sucesso", "Imagem enviada com sucesso!");
          navigation.goBack();
        },
        onError: () => {
          Alert.alert("Erro", "Falha ao enviar a imagem.");
        },
      });
    }
  };

  return (
    <Container>
      <Button title="Abrir Câmera" onPress={handleTakePhoto} />
      {uploadMutation.isPending && <Loader />}
    </Container>
  );
}