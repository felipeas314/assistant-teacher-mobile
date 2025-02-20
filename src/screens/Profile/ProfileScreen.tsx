import React from "react";
import { View, Text, Button } from "react-native";
import { useTheme } from "../../theme/themeContext";

export default function ProfileScreen() {
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: isDarkMode ? "#121212" : "#FFFFFF" }}>
      <Text style={{ color: isDarkMode ? "#FFF" : "#000", fontSize: 24 }}>Profile Screen</Text>
      <Button title="Alternar Tema" onPress={toggleTheme} />
    </View>
  );
}