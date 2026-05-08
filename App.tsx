import React from "react";
import {themes} from './src/style/themes'
import AppNavigator from "./src/navigation/AppNavigator";
import { Provider as PaperProvider } from "react-native-paper";
import { AuthProvider } from "./src/context/AuthContext";
import "react-native-get-random-values";

export default function App() {
  return (
    <AuthProvider>
      <PaperProvider theme={themes.paperTheme}>
        <AppNavigator/>
      </PaperProvider>
    </AuthProvider>
  );
}
