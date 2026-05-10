import React, { useState, useEffect, createContext } from "react";
import { View, ScrollView } from "react-native";
import { Provider as PaperProvider, Card, Searchbar, Text } from 'react-native-paper';
import { styles } from "../Home/home.styles";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { themes } from "../../style/themes";
import MedicationCard from "../../components/MedicationCard";
import AppHeader from "../../components/AppHeader";
import { medications } from "../../mock/medications";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";

type NavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  "Main"
>;

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProps>();
  const [search, setSearch] = useState("");

  function searchInput() {
    if (!search.trim()) return;
    
    const medicamentoEncontrado = medications.find((med) =>
        med.nome.toLowerCase().includes(search.toLowerCase())
    );

    if (!medicamentoEncontrado) {
        console.log("Medicamento não encontrado");
        return;
    }

    navigation.navigate("Detail", {
        id: medicamentoEncontrado.id,
    });
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
      <AppHeader 
        title="EBula" 
        nameIcon="laptop-medical" 
        rightAction="profile" 
        // onProfilePress={() => navigation.navigate("Profile")}
      />
      <View style={styles.content}>
        <Searchbar
          placeholder="Digite o nome do medicamento"
          placeholderTextColor={themes.colors.outline}
          value={search}
          onChangeText={setSearch}
          onIconPress={searchInput}
          style={styles.search}
          inputStyle={styles.searchInput}
          iconColor={themes.colors.outline}
          onSubmitEditing={searchInput}
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
          {medications.map(medication => (
              <MedicationCard
                key={medication.id}
                title={medication.nome}
                subtitle={medication.subtitle}
                onPress={() => 
                  navigation.navigate("Detail", {
                    id: medication.id,
                  })
                }
              />
            )
          )}
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
