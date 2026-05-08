import React, { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, View, Image, KeyboardAvoidingView, Platform, TouchableOpacity, TextBase } from "react-native";
import Snackbar from "../../../components/Snackbar";
import { styles } from "../register.styles";
import Logo from "../../../assets/ebula_logo.png";
import { Provider as PaperProvider, Menu, TextInput, Text, Button } from 'react-native-paper';
import { themes } from "../../../style/themes";
import { RootStackParamList } from "../../../navigation/types";
import { registerLocal } from "../../../services/authService";
import "react-native-get-random-values";
import {v4 as uuidv4} from "uuid";

type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, "Register">;
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
    const [senha, setSenha] = useState("");
    const [loading, setLoading] = useState(false);
    const [snack, setSnack] = useState<{ visible: boolean; msg: string }>({ visible: false, msg: "" });
    const [showPassword, setShowPassword] = useState(false);
    const emailRegex = /\S+@\S+\.\S+/;
    const senhaRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!#@$%&]{6,15}$/; // regex que  exige letras e números, com um limite de tamanho (6 a 15 caracteres)

    async function handleRegister() {
        setLoading(true)

        try {
            if (!nome.trim()) throw new Error("Nome obrigatório");
            if (!emailRegex.test(email)) throw new Error("Email inválido");
            if (!senhaRegex.test(senha)) throw new Error("Senha precisa ter: ao menos 6 caracteres, letras e números");
            if (!selected) throw new Error("Selecione uma categoria profissional");
            await registerLocal(
                {
                     id: uuidv4(),
                    nome,
                    email: email.trim().toLowerCase(),
                    categoriaProfissional: selected,
                }, senha
            )
            setSnack({ visible: true, msg: "Usuário criado com sucesso!"});
            
            setTimeout(() => {
                navigation.navigate("Login");
            }, 1500);
        } catch (err: any) {
            setSnack({ visible: true, msg: err.message || "Erro ao cadastrar" });
        } finally {
            setLoading(false);
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : undefined}>
            <View style={styles.boxTop}>
                <Image source={Logo} style={styles.logo} resizeMode="contain" />
                <text style={styles.title}>Bem-vindo ao EBula</text>
                <Text variant="bodyLarge" style={{ fontSize: 18, alignItems: "center" }}>Informe seus dados para cadastro</Text>
            </View>
            <View style={styles.boxMid}>
                <TextInput
                    style={{ marginBottom: 4 }}
                    label="Nome Completo"
                    placeholder="Maria Silva"
                    value={nome}
                    onChangeText={text => setNome(text)}
                    mode="outlined"
                    outlineStyle={{borderRadius: 10}}
                />
                <TextInput
                    style={{ marginBottom: 4 }}
                    label="Email"
                    placeholder="seuemail@email.com"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    mode="outlined"
                    outlineStyle={{borderRadius: 10}}
        
                />
                <TextInput
                    style={{ marginBottom: 10 }}
                    label="Senha"
                    placeholder="......"
                    value={senha}
                    onChangeText={text => setSenha(text)}
                    mode="outlined"
                    outlineStyle={{borderRadius: 10}}
                />
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    style={stylesLocal.menu}
                    anchor={
                        <Button
                            mode="outlined"
                            onPress={openMenu}
                            contentStyle={stylesLocal.buttonContent}
                            style={stylesLocal.selectButton}
                            labelStyle={stylesLocal.buttonLabel}
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
                            titleStyle={stylesLocal.menuItemTitle}
                            style={stylesLocal.menuItem}
                        />
                    ))}
                </Menu>
                <Button 
                    style= {{ padding: 6, marginVertical: 12 }}
                    labelStyle={stylesLocal.labelButton} 
                    mode="contained"
                    onPress={handleRegister}
                    >
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
    menu: {
        marginTop: 5, // opcional: ajustar margem do container do menu
    },
    buttonContent: {
        height: 50,
        justifyContent: "space-between",
        textAlign: "left",
    },
    selectButton: {
        width: "100%",
        justifyContent: "center",
    },
    buttonLabel: {
        color: themes.colors.primary,
        fontSize: 16,
    },
    menuItemTitle: {
        color: themes.colors["on-surface"], // cor do texto do menu
        fontSize: 15,
    },
    menuItem: {
        marginVertical: 6, // aumenta espaço vertical entre itens
        paddingVertical: 8, // aumenta área clicável
    },
     labelButton: {
    color: themes.colors["surface-container-lowest"], 
    },
})