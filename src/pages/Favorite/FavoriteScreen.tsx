import React, { useState, useEffect, createContext } from "react";
import { View, Image, KeyboardAvoidingView, Platform, StyleSheet, ScrollView, TouchableOpacity, FlatList, Alert, Modal } from "react-native";
import { Provider as PaperProvider, Menu, BottomNavigation, TextInput, Text, Divider} from 'react-native-paper';
import { useAuth } from "../../hooks/useAuth";
import { themes } from "../../style/themes";
import { styles } from "../Favorite/favorite.styles";
import { useNavigation } from "@react-navigation/native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from "../../../assets/ebula_logo.png";
import { Grupo } from '../../types/Group';
import { Medicamento } from '../../types/Medicine';
import { User } from "../../types/User";
import {loginLocal, logoutLocal, loadSession} from "../../services/authService";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Snackbar from "../../components/Snackbar";
import { MaterialIcons } from '@expo/vector-icons';
import { SessionUser } from "../../types/SessionUser";


export default function FavoriteScreen() {
    const navigation = useNavigation();
    
    async function logout() {
        const { logout } = useAuth();
      }

    return (
      <View style={styles.highlightCard}>
        <Text>Favoritos</Text>
        <Divider style={{ marginTop: 12, marginBottom: 6, backgroundColor: themes.colors["outline"] }} />
      </View>
  );
}