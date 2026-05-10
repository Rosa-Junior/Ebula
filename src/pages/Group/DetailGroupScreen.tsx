import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
import { useNavigation } from "@react-navigation/native";
import { Provider as PaperProvider, Searchbar, IconButton, Text  } from 'react-native-paper';
import AppHeader from "../../components/AppHeader";
import { groups } from "../../mock/group";
import { medications } from "../../mock/medications";

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

  return (
  
    <ScrollView>
      <AppHeader 
        title="EBula" 
        nameIcon="laptop-medical"
        rightAction="back"
        onBack={handleBackPress } 
      />
         <Text variant="headlineMedium">
            {grupo.nome}
         </Text>

         {medicamentosDoGrupo.map((medication) => (
            <View key={medication.id}>
               <Text>
                  {medication.nome}
               </Text>
            </View>
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