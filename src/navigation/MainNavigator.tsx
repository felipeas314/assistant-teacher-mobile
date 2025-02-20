import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import CameraScreen from "../screens/QuestionPhoto/QuestionPhotoScreen";
import HistoryNavigator from "./HistoryNavigator";
import { PhotoNavigator } from "./PhotoNavigator";

const Tab = createBottomTabNavigator();

export function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: "#FFF", paddingBottom: 5, height: 60 },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Perfil") iconName = "person-outline";
          else if (route.name === "Tirar Foto") iconName = "camera-outline";
          else if (route.name === "Histórico") iconName = "time-outline";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      
      <Tab.Screen name="Tirar Foto" component={PhotoNavigator} />
      <Tab.Screen name="Histórico" component={HistoryNavigator} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
      
    </Tab.Navigator>
  );
}
