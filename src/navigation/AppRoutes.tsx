import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "../pages/Medicine/DetailScreen";
import DetailGroupScreen from"../pages/Group/DetailGroupScreen";
import MainScreen from "../pages/Main/MainScreen";
import { RootStackParamList } from "../navigation/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
            <Stack.Screen name="DetailGroup" component={DetailGroupScreen} />
        </Stack.Navigator>
    )
}
     // <Stack.Screen name="Search" component={SearchScreen} />