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
    navigation: NativeStackNavigationProp<RootStackParamList, "Login">;
};





type Option = {
    label: string;
    value: string;
};
const options: Option[] = [
    { label: "Médico", value: "medico" },
    { label: "Enfermeiro", value: "enfermeiro" },
    { label: "Técnico de Enfermagem", value: "tecnico" },
    { label: "Outro", value: "outro" },
];


export default function NewUserRegister({ navigation }: Props) {
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState("");
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    function handleSelect(value: string) {
        setSelected(value);
        closeMenu();
    }

    const selectedLabel =
        options.find((option) => option.value === selected)?.label ||
        "Selecione uma opção";







    const { login } = useAuth();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [categoriaProfissional, setCategoriaProfissional] = useState("");
    const [senha, setSenha] = useState("");




    const [loading, setLoading] = useState(false);
    const [snack, setSnack] = useState<{ visible: boolean; msg: string }>({ visible: false, msg: "" });
    const [showPassword, setShowPassword] = useState(false);

    async function handleLogin() {
        setLoading(true);
        try {
            const emailRegex = /\S+@\S+\.\S+/;
            if (!emailRegex.test(email)) throw new Error("Email inválido");
            if (senha.length < 6) throw new Error("Senha precisa ter ao menos 6 caracteres");
            await login(email.trim().toLowerCase(), senha);
            navigation.replace("Home");
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

                <text style={styles.title}>Bem-vindo ao EBula</text>
                <Text variant="bodyLarge" style={{ alignItems: "center" }}>Informe seus dados para cadastro</Text>
            </View>

            <View style={styles.boxMid}>
                <TextInput
                    style={{ marginBottom: 4 }}
                    label="Nome Completo"
                    value={nome}
                    onChangeText={text => setNome(text)}
                    mode="outlined"
                />
                <TextInput
                    style={{ marginBottom: 4 }}
                    label="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    mode="outlined"
                />
                <TextInput
                    style={{ marginBottom: 4 }}
                    label="Senha"
                    value={senha}
                    onChangeText={text => setSenha(text)}
                    mode="outlined"
                />

                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                        <Button
                            mode="outlined"
                            onPress={openMenu}
                            contentStyle={stylesLocal.buttonContent}
                            style={stylesLocal.selectButton}
                        >
                            {selectedLabel}
                        </Button>
                    }
                >
                    {options.map((option) => (
                        <Menu.Item
                            key={option.value}
                            onPress={() => handleSelect(option.value)}
                            title={option.label}
                        />
                    ))}
                </Menu>


                <br />

                <Button style={{ padding: 6 }} mode="contained" onPress={handleLogin}>
                    Cadastrar
                </Button>

            </View>
            <Snackbar
                visible={snack.visible}
                message={snack.msg}
                onClose={() => setSnack({ visible: false, msg: "" })}
            />
        </KeyboardAvoidingView>
    );

}

const stylesLocal = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        justifyContent: "center",
    },

    label: {
        marginBottom: 8,
    },

    selectButton: {
        width: "100%",
        justifyContent: "center",
        color: themes.colors["on-surface-variant"]
    },

    buttonContent: {
        height: 50,
        justifyContent: "space-between",
        textAlign: "left"
    },
})