import React, { useState } from "react";
import { View, } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/types";
import { Provider as PaperProvider, Text, Divider, Card, Searchbar, IconButton  } from 'react-native-paper';
import { medications } from "../../mock/medications";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import AppHeader from "../../components/AppHeader";
import { styles } from "../Group/group.styles";
import { useAuth } from "../../hooks/useAuth";

type DetailRouteProp = RouteProp<
  RootStackParamList,
  "Detail"
>;

type NavigationProps = NativeStackNavigationProp<
  RootStackParamList
>;

export default function DetailScreen() {
  const route = useRoute<DetailRouteProp>();
  const navigation = useNavigation<NavigationProps>();
   const { logout } = useAuth();

  // const medicamento = detailMedication[0];

  const {id} = route.params;

  const medicamento = medications.find(
    (med) => med.id === id
  );

  if (!medicamento) {
   return (
      <View>
        <Text>Medicamento não encontrado</Text>
      </View>
   );
  }

  function handleBackPress() {
    navigation.goBack()
  }
  // function handleLogout() {
  //      logout();
  // }

  return (
    <View style={styles.containerCard}>
      <AppHeader 
        title="EBula" 
        nameIcon="laptop-medical"
        rightAction="back"
        onBack={handleBackPress} 
      />
      <View style={styles.contentCard}>
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.tagsContainer}>
              <View style={styles.categoryBadge}>
                <Text style={styles.categoryText}>
                  {medicamento.categoria}
              
                </Text>
              </View>

              <View style={styles.tarjaBadge}>
                <Text style={styles.tarjaText}>
                  {medicamento.tarja}
          
                </Text>
              </View>
            </View>  
            <Text style={styles.title}>
              {medicamento.nome}
            
            </Text>

            <Text style={styles.subtitle}>
              {medicamento.principioAtivo}
            
            </Text>

            <Divider style={styles.divider} />
            <View style={styles.infoContainer}>
              <View>
                <Text style={styles.label}>
                  DOSAGEM COMUM
                </Text>

                <Text style={styles.infoText}>
                 {medicamento.dosagem}
          
                </Text>
              </View>
              <View>
                <Text style={styles.label}>
                  TEMPO DE ABSORÇÃO
                </Text>

                <Text style={styles.infoText}>
                  {medicamento.absorcao}
          
                </Text>
              </View>
            </View>
          </Card.Content>
        </Card>
      </View>
    </View>
  );
}

  
