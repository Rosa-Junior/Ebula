import React, { useState, useEffect, createContext } from "react";
import { View, ScrollView } from "react-native";
import { Provider as PaperProvider, Text, Card, Searchbar, Button, IconButton } from 'react-native-paper';
import { styles } from "../Group/group.styles";
import { themes } from "../../style/themes";
import GroupCard from "../../components/GroupCard";
import AppHeader from "../../components/AppHeader";
import { groups } from "../../mock/group";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/useAuth";

type NavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  "Main"
>;

export default function GroupScreen() {
    const navigation = useNavigation<NavigationProps>();
    const { logout } = useAuth();

    async function registerNewGroup() {
        return "Grupo Criado"
    }

    function handleLogout() {
         logout();
    }

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
            <AppHeader 
                title="EBula" 
                nameIcon="laptop-medical"
                rightAction="logout"
                onLogoutPress={handleLogout} 
            />
            <View style={styles.content}>
                <View style={styles.headerRow}>
                    <View style={styles.textGroup}>
                        <Text style={styles.title}>Meus Grupos</Text>
                        
                        <Text style={styles.subtitle}>Gerencie suas categorias de medicamentos de forma organizada</Text>
                    </View>
                    <IconButton
                        icon="magnify"
                        size={24}
                        iconColor={themes.colors.primary}
                        onPress={() => {}}
                        />
                </View>
                <Button 
                    style= {styles.button}
                    labelStyle={styles.labelButton} 
                    mode="contained"
                    icon="folder-plus"
                    onPress={registerNewGroup}
                >
                    Criar Grupo
                </Button>
                {groups.map(group => (
                <GroupCard
                    key={group.id}
                    title={group.nome}
                    description={group.description}
                    totalMedicamentos={group.totalMedications}
                    onPress={() => navigation.navigate("DetailGroup", {
                      id: group.id,
                    })}
                />
                ))}
                {/* <FlatList    // listar card de grupos
                  data={grupos}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => (
                    <GroupCard
                      title={item.nome}
                      description={item.description}
                      totalMedicamentos=={item.totalMedicamentos}
                      onPress={() => navigation.navigate("Detail")}
                    />
                  )}
                /> */}
            </View>
        </ScrollView>
    );
}