import React from "react";

import {
    Text,
    View,
    Image,
    TextInput
} from "react-native";

import { styles } from "./styles";
import Logo from "../../assets/logo.png";

export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.boxTop}>
                <Image 
                    source={Logo} 
                    style={styles.logo}
                    resizeMode="contain"
                /> 
            </View>
            <View style={styles.boxMid}>
                <Text style={styles.titleImput}>E-mail</Text>
                <TextInput>
                </TextInput>
            </View>
                <View style={styles.boxBottom}>
                    <Text style={styles.titleImput}>Senha</Text>
                    <TextInput>
                        Digite sua senha
                    </TextInput>
                </View>    
        </View>
    )
    }