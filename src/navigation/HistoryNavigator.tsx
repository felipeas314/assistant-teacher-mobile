import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HistoryScreen from "../screens/History/HistoryScreen";
import HistoryDetailsScreen from "../screens/HistoryDetail/HistoryDetailScreen";

const Stack = createNativeStackNavigator();

export default function HistoryNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Histórico" component={HistoryScreen} />
      <Stack.Screen name="Detalhes" component={HistoryDetailsScreen} />
    </Stack.Navigator>
  );
}