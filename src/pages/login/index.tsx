import React from "react";

import {
    Text,
    View
} from "react-native";  

import { styles } from "./styles";

export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.boxTop}>
                <Text>Login</Text>
            </View>
            <View style={styles.boxMid}>
                <Text>Mid</Text> 
            </View>
                <View style={styles.boxBottom}>
                    <Text>Bottom</Text>
                </View>    
        </View>
    )
    }