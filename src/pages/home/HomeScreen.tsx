import React, { useState, useEffect, createContext } from "react";
import { View, Image, KeyboardAvoidingView, Platform, StyleSheet, ScrollView, TouchableOpacity, FlatList, Alert, Modal } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider as PaperProvider, Menu, BottomNavigation, TextInput, Text, Divider} from 'react-native-paper';
import { useAuth } from "../../hooks/useAuth";
import { styles } from "./home.styles";
import Logo from "../../../assets/ebula_logo.png";
import { themes } from "../../style/themes";
import { Grupo } from '../../types/Group';
import { Medicamento } from '../../types/Medicine';
import { User } from "../../types/User";
import {loginLocal, logoutLocal, loadSession} from "../../services/authService";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Snackbar from "../../components/Snackbar";
import { MaterialIcons } from '@expo/vector-icons';
import { SessionUser } from "../../types/SessionUser";


type AuthContextData = {
  user: SessionUser | null;
  loading: boolean;
};

type AuthProviderProps = {
   children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export function AuthProvider({children,}: AuthProviderProps) {
  const [user, setUser] = useState<SessionUser | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function loadUser() {
      const session = await loadSession();
      setUser(session);
      setLoading(false);
    }
    loadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const HomeRoute = () => <Text>Home</Text>;
const FavoritesRoute = () => <Text>Favoritos</Text>;
const GroupsRoute = () => <Text>Grupos</Text>;
const NotificationsRoute = () => <Text>Notifications</Text>;

export default function HomeScreen() {
  async function logout() {
    const { logout } = useAuth();
  }
    return (
    
      <View style={styles.boxButton}>
        <Text>Home</Text>
        <Button
            label="Entrar"
            onPress={logout}
            fullWidth={true}
        />   
        <Divider style={{ marginTop: 12, marginBottom: 6, backgroundColor: themes.colors["outline"] }} />
      </View>
  );
}
