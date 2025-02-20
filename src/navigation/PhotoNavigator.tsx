import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroCapturePhotoScrean from "../screens/IntroCapturePhoto/IntroCapturePhotoScreean";
import CameraCaptureScrean from "../screens/CameraCapture/CameraCaptureScrean";


const Stack = createNativeStackNavigator();

export function PhotoNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CameraIntro" component={IntroCapturePhotoScrean} />
      <Stack.Screen name="CameraCapture" component={CameraCaptureScrean} />
    </Stack.Navigator>
  );
}
