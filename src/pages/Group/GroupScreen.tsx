import React, { useState, useEffect, createContext } from "react";
import { View, ScrollView } from "react-native";
import { Provider as PaperProvider, Text, Card, Searchbar, Button, IconButton } from 'react-native-paper';
import { styles } from "../Group/group.styles";
import { themes } from "../../style/themes";
import { useNavigation } from "@react-navigation/native";
import MedicationCard from "../../components/MedicationCard";
import GroupCard from "../../components/GroupCard";
import AppHeader from "../../components/AppHeader";

export default function GroupScreen() {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");

  async function registerNewGroup() {

    return "Grupo";
  }

  return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
            <AppHeader title="EBula" nameIcon="laptop-medical" />
            <View style={styles.content}>
                <View >
                    <View>
                        <Text style={styles.title}>Meus Grupos</Text>
                        <IconButton
                        icon="magnify"
                        size={24}
                        iconColor={themes.colors.primary}
                        style={styles.iconButton}
                        onPress={() => {}}
                        />
                        <Text style={styles.subtitle}>Gerencie suas categorias de medicamentos de forma organizada</Text>
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
                </View>
                {/* <Searchbar
                    placeholderTextColor={themes.colors.outline}
                    value={search}
                    onChangeText={setSearch}
                    style={styles.search}
                    inputStyle={styles.searchInput}
                    iconColor={themes.colors.outline}
                /> */}
                <Card style={styles.highlightCard}>
                  <View>
                    
                  </View>
                </Card>
                <GroupCard
                    title="Analgésicos"
                    totalMedicamentos={12}
                    onPress={() => navigation.navigate("Detail")}
                />
                <GroupCard
                title="Cardiológicos"
                totalMedicamentos={8}
                onPress={() => navigation.navigate("Detail")}
                />
                {/* <FlatList    // listar card de medicamentos
                  data={medicamentos}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => (
                    <MedicationCard
                      title={item.nome}
                      subtitle={item.principioAtivo}
                      onPress={() => navigation.navigate("Detail")}
                    />
                  )}
                /> */}
            </View>
        </ScrollView>
    );

}