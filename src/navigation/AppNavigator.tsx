import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthProvider } from "../context/AuthContext";
import LoginScreen from "../pages/Auth/LoginScreen";
//import HomeScreen from "../pages/home/HomeScreen";
import NewUserRegister from "../pages/Auth/register/NewUserRegister";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
          <Stack.Screen name="Register" component={NewUserRegister} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}