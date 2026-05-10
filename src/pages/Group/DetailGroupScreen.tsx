import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
import { useNavigation } from "@react-navigation/native";
import { Provider as PaperProvider, Card, Searchbar, Chip, IconButton, Text  } from 'react-native-paper';
import AppHeader from "../../components/AppHeader";
import { groups } from "../../mock/group";
import { medications } from "../../mock/medications";
import MedicationCard from "../../components/MedicationCard";
import { styles } from "../Group/group.styles";

type DetailGroupRouteProp = RouteProp<
  RootStackParamList,
  "DetailGroup"
>;

type NavigationProps = NativeStackNavigationProp<
  RootStackParamList
>;

export default function DetailGroupScreen() {
  const route = useRoute<DetailGroupRouteProp>();
  const navigation = useNavigation<NavigationProps>();

  const { id } = route.params;

  const grupo = groups.find(
      (group) => group.id === id
  );

  if (!grupo) {
    return (
      <View>
          <Text>Grupo não encontrado</Text>
      </View>
    );
  }

  const medicamentosDoGrupo = medications.filter(
      (medication) =>
         grupo.medicationIds.includes(medication.id)
  );
  
  function handleBackPress() {
    navigation.goBack();
  }

  function handleMedicationPress(id: number) {
    navigation.navigate("Detail", { id });
  }

  return (
      <ScrollView
      style={styles.containerDetail}
      contentContainerStyle={styles.contentDetail}
      showsVerticalScrollIndicator={false}
    >

      <AppHeader
        title="EBula" 
        nameIcon="laptop-medical"
        rightAction="back"
        onBack={handleBackPress } 
      />

      <Card style={styles.groupInfoCard}>
        <Card.Content>

          <Text
            variant="headlineSmall"
            style={styles.groupTitle}
          >
            {grupo.nome}
          </Text>

          <Text style={styles.groupDescription}>
            {grupo.description}
          </Text>

          <View style={styles.chipsContainer}>
            <Chip icon="pill">
              {medicamentosDoGrupo.length} medicamentos
            </Chip>
          </View>

        </Card.Content>
      </Card>

      <Text
        variant="titleMedium"
        style={styles.sectionTitle}
      >
        Medicamentos
      </Text>

      {medicamentosDoGrupo.map((medication) => (
        <MedicationCard
          key={medication.id}
          title={medication.nome}
          subtitle={medication.subtitle}
          onPress={() =>
            handleMedicationPress(medication.id)
          }
        />
      ))}

    </ScrollView>
  );
}

// export function getMedicationsByGroup(
//    groupId: number
// ) {

//    const group = groups.find(
//       (g) => g.id === groupId
//    );

//    if (!group) return [];

//    return medications.filter((med) =>
//       group.medicationIds.includes(med.id)
//    );
// }

// const medicamentosDoGrupo =
//    getMedicationsByGroup(id);