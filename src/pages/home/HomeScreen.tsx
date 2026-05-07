import React, { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, View, Image, KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
import Snackbar from "../../../components/Snackbar";
import { styles } from "../styles";
import Logo from "../../../assets/ebula_logo.png";
import { Provider as PaperProvider, Menu, TextInput, Text, Button } from 'react-native-paper';
import { themes } from "../../../style/themes";

type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    Register: undefined;
};

type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, "Register">;
};

type Option = {
    label: string;
    value: string;
};
