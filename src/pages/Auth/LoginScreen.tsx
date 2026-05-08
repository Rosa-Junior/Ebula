import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, View, Image, KeyboardAvoidingView, Platform, TouchableOpacity} from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Snackbar from "../../components/Snackbar";
import { styles } from "./register.styles";
import Logo from "../../assets/ebula_logo.png";
import { MaterialIcons } from "@expo/vector-icons";
import { themes } from "../../style/themes";
import { Divider } from 'react-native-paper';
import { RootStackParamList } from "../../navigation/types";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Login">;
};

export default function LoginScreen({ navigation }: Props) {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [snack, setSnack] = useState<{ visible: boolean; msg: string }>({ visible: false, msg: "" });
  const [showPassword, setShowPassword] = useState(false);

    async function handleLogin() {
        if (!email || !senha) {setSnack({ visible: true, msg: "Preencha todos os campos"}); return; }
        setLoading(true);
        try {
            await login(email.trim().toLowerCase(), senha);
        } catch (err: any) {
            setSnack({ visible: true, msg: err.message || "Erro ao autenticar" });
        } finally {
            setLoading(false);
        }
    }
    return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <View style={styles.boxTop}>
            <Image source={Logo} style={styles.logo} resizeMode="contain" />
            <Text style={styles.title}>Bem-vindo ao EBula</Text>
            <Text style={styles.subtitle}>Acesse suas informações médicas com precisão</Text>
        </View>
        
        <View style={styles.boxMid}>
            <Input
                label="Email"
                placeholder="Digite seu email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input
                secureTextEntry={!showPassword}
                label="Senha"
                placeholder="Digite sua senha"
                value={senha}
                onChangeText={setSenha}
                rightIcon={
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <MaterialIcons
                            name={showPassword ? "visibility" : "visibility-off"}
                            size={24}
                            color={themes.colors.outline}
                        />
                    </TouchableOpacity>
                }
            />
            <View style={styles.boxButton}>
                <Button
                    label="Entrar"
                    onPress={handleLogin}
                    disabled={!email || !senha || loading}
                    loading={loading}
                    fullWidth={true}
                />   
                <Divider style={{ marginTop: 12, marginBottom: 6, backgroundColor: themes.colors["outline"] }} />
                <TouchableOpacity style={styles.registerLink} onPress={() => navigation.navigate("Register")}>
                    <Text style={styles.registerText}>
                        Não tem conta? 
                        <Text style={{ fontWeight: "bold" }}>
                            {" "}Cadastre-se
                        </Text>
                    </Text>
                </TouchableOpacity>
            </View> 
        </View>
        <Snackbar
            visible={snack.visible}
            message={snack.msg}
            onClose={() => setSnack({ visible: false, msg: "" })}
        />
    </KeyboardAvoidingView>
    );        
}