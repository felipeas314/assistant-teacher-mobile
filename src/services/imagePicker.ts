import * as ImagePicker from "expo-image-picker";

export async function takePhoto() {
  const { status } = await ImagePicker.requestCameraPermissionsAsync();
  if (status !== "granted") {
    alert("Precisamos de permissão para acessar a câmera!");
    return null;
  }

  const result = await ImagePicker.launchCameraAsync({
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
    base64: true
  });

  if (!result.canceled) {
    return result.assets[0].uri; // Agora retorna a URI do arquivo
  }

  return null;
}