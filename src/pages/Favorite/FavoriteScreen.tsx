import React, { useState, useEffect, createContext } from "react";
import { View, ScrollView } from "react-native";
import { Provider as PaperProvider, Text, Searchbar } from 'react-native-paper';
import { useAuth } from "../../hooks/useAuth";
import { themes } from "../../style/themes";
import { styles } from "../Favorite/favorite.styles";
import { useNavigation } from "@react-navigation/native";
import AppHeader from "../../components/AppHeader";
import FavoriteCard from "../../components/FavoriteCard";
import { medications } from "../../mock/medications";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";

type NavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  "Main"
>;

const favoriteIds = [1, 2];

export default function FavoriteScreen() {
    const navigation = useNavigation<NavigationProps>();
    const [search, setSearch] = useState("");
    const { logout } = useAuth();

    // favoritos
    const favorites = medications.filter((med) =>
        favoriteIds.includes(med.id)
    );

    // favoritos filtrados
    const filteredFavorites = favorites.filter((med) =>
        med.nome.toLowerCase().includes(search.toLowerCase())
    );

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
                <View style={styles.textGroup}>
                    <Text style={styles.title}>Favoritos</Text>
                        
                    <Text style={styles.subtitle}>Acesse as informações dos seus principais medicamentos a qualquer momento.</Text>
                </View>
                
                <Searchbar
                    placeholder="Digite o nome do medicamento"
                    placeholderTextColor={themes.colors.outline}
                    value={search}
                    onChangeText={setSearch}
                    // onIconPress={filteredFavorites}
                    style={styles.search}
                    inputStyle={styles.searchInput}
                    iconColor={themes.colors.outline}
                    // onSubmitEditing={filteredFavorites}
                />
                {/* {filteredFavorites.map(med => (
                <FavoriteCard
                    key={med.id}
                    nome={med.nome}
                    miligramas={med.miligramas}
                    principioAtivo={med.principioAtivo}
                    apresentacao={med.apresentacao}
                    onDetailsPress={() => 
                        navigation.navigate("Detail", {
                            id: med.id,
                        })
                    }
                />
                ))} */}
                {filteredFavorites.length === 0 ? (

                    <Text style={{ marginTop: 20 }}>
                        Nenhum medicamento encontrado
                    </Text>

                ) : (

                    filteredFavorites.map((med) => (

                        <FavoriteCard
                            key={med.id}
                            nome={med.nome}
                            miligramas={med.miligramas}
                            principioAtivo={med.principioAtivo}
                            apresentacao={med.apresentacao}
                            onDetailsPress={() =>
                                navigation.navigate(
                                    "Detail",
                                    {
                                        id: med.id,
                                    }
                                )
                            }
                        />

                    ))

                )}
                {/* {favorites.map(item => (
                <FavoriteCard
                    key={item.id}
                    nome={item.nome}
                    miligramas={item.miligramas}
                    principioAtivo={item.principioAtivo}
                    apresentacao={item.apresentacao}
                    onDetailsPress={() => 
                        navigation.navigate("Detail", {
                            id: item.id,
                        })
                    }
                />
                ))} */}
            </View>
        </ScrollView>
  );
}