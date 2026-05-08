import React, { useState, useEffect, createContext } from "react";
import { View, ScrollView } from "react-native";
import { Provider as PaperProvider, Card, Searchbar, Text } from 'react-native-paper';
import { styles } from "../Home/home.styles";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { themes } from "../../style/themes";
import MedicationCard from "../../components/MedicationCard";
import AppHeader from "../../components/AppHeader";
import Detail from "../Medicine/DetailScreen"

export default function HomeScreen() {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");

  async function searchInput() {

    return "Detalhes de medicamento";
  }

  return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
            <AppHeader title="EBula" nameIcon="laptop-medical" />
            <View style={styles.content}>
                <Searchbar
                    placeholder="Digite o nome do medicamento"
                    placeholderTextColor={themes.colors.outline}
                    value={search}
                    onChangeText={setSearch}
                    style={styles.search}
                    inputStyle={styles.searchInput}
                    iconColor={themes.colors.outline}
                />
                <Card style={styles.highlightCard}>
                  <View>
                    <Card.Cover 
                      source={require("../../assets/woman_handle_medicine.jpg")} 
                      style={styles.cardImage} 
                    />
                    <LinearGradient colors={["transparent", "rgba(0, 0, 0, 0.91)"]} style={styles.overlay}>
                      <Text variant="titleLarge" style={styles.cardTitle}>
                        Decisões rápidas e seguras
                      </Text>
                      <Text variant="bodyMedium" style={styles.cardSubtitle}>
                        Acesse bulas atualizadas e dosagens precisas em segundos.
                      </Text>
                    </LinearGradient>
                  </View>
                </Card>
                <Text variant="titleMedium" style={styles.sectionTitle}
                >
                  Buscas Recentes
                </Text>
                <MedicationCard
                  title="Dorflex"
                  subtitle="Dipirona + Cafeína"
                  onPress={() => navigation.navigate("Detail")}
                />
                <MedicationCard
                  title="Dorflex"
                  subtitle="Dipirona + Cafeína"
                  onPress={() => navigation.navigate("Detail")}
                />
                <MedicationCard
                  title="Dorflex"
                  subtitle="Dipirona + Cafeína"
                  onPress={() => navigation.navigate("Detail")}
                />
                <MedicationCard
                  title="Dorflex"
                  subtitle="Dipirona + Cafeína"
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
