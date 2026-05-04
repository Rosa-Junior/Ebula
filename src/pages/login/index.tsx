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
                <View style={styles.boxInput}>
                    <TextInput>Digite seu e-mail
                    </TextInput>
                
                </View>
                <Text style={styles.titleImput}>Senha</Text>
                <View style={styles.boxInput}>  
                    <TextInput>Digite sua senha
                    </TextInput>
                </View>    
            </View>
            <View style={styles.boxBottom}>
            </View>    
        </View>
    )
    }