import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "../navigation/AppRoutes";
import AuthRoutes from "../navigation/AuthRoutes"
import { useAuth } from "../hooks/useAuth";


export default function AppNavigator() {
  const { user } = useAuth();

  return (
      <NavigationContainer>
         {user ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
  );
}

// if (loading) {
//    return <LoadingScreen />
//   }