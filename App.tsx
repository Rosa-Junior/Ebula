import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from './src/pages/Auth/LoginScreen';
import {themes} from './src/style/themes'

import AppNavigator from "./src/navigation/AppNavigator";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider theme={themes.paperTheme}>
      <AppNavigator/>
    </PaperProvider>
  );
}
