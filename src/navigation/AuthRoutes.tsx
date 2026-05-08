
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../pages/Auth/LoginScreen";
import NewUserRegister from "../pages/Auth/Register/NewUserRegister";

const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={NewUserRegister} />
        </Stack.Navigator>
    )
}
