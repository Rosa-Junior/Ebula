import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity,} from "react-native";
import { Card, Text, IconButton, } from "react-native-paper";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { themes } from "../style/themes";

type Props = {
  nome: string;
  principioAtivo: string;
  miligramas: string;
  apresentacao: string;
  onDetailsPress?: () => void;
};

export default function FavoriteCard({
  nome,
  principioAtivo,
  miligramas,
  apresentacao,
  onDetailsPress,
}: Props) {

  const [favorite, setFavorite] = useState(true);

  return (
    <Card style={styles.card}>

        <View style={styles.header}>

            <View style={styles.textGroup}>
                <Text style={styles.title}>
                    {nome}
                </Text>
                <Text style={styles.subtitle}>
                    {principioAtivo}
                </Text>
            </View>

            <IconButton
                icon={favorite ? "heart" : "heart-outline"}
                iconColor={themes.colors.primary_container}
                size={22}
                onPress={() => setFavorite(!favorite)}
            />
        </View>

        <View style={styles.tagsContainer}>

            <View style={styles.tag}>
                <Text style={styles.tagText}>
                    {miligramas}
                </Text>
            </View>

            <View style={styles.tag}>
                <Text style={styles.tagText}>
                    {apresentacao}
                </Text>
            </View>

        </View>

        <View style={styles.divider} />

        <View style={styles.footer}>

            <View style={styles.offlineContainer}>
                <FontAwesome6
                    name="download"
                    size={12}
                    color={themes.colors.medium_gray}
                />

                <Text style={styles.offlineText}>
                    Disponível offline
                </Text>
            </View>

            <TouchableOpacity onPress={onDetailsPress}>
                <Text style={styles.detailsText}>
                    Ver detalhes →
                </Text>
            </TouchableOpacity>

        </View>

    </Card>
  );
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: themes.colors["surface-container-lowest"],
    borderRadius: 18,
    padding: 10,
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: themes.colors.surface,
    // shadowColor: "#000",
    // shadowOffset: {
    //     width: 0,
    // height: 2,
    // },
    // shadowOpacity: 0.08,
    // shadowRadius: 4,
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  textGroup: {
    gap: 8
  },
  title: {
    fontSize: 17,
    fontWeight: "700",
    color: themes.colors["on-surface-variant"],
  },

  subtitle: {
    fontSize: 14,
    color: themes.colors.medium_gray,
  },

  tagsContainer: {
    flexDirection: "row",
    marginTop: 10,
    gap: 10,
  },

  tag: {
    backgroundColor: themes.colors.surface,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },

  tagText: {
    fontSize: 12,
    color: themes.colors.outline,
    fontWeight: "600",
  },

  divider: {
    height: 1,
    backgroundColor: themes.colors.outline_grayscale,
    marginVertical: 14,
    width: "100%",
    alignSelf: "center",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  offlineContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  offlineText: {
    fontSize: 12,
    color: themes.colors.offline,
  },

  detailsText: {
    fontSize: 13,
    fontWeight: "700",
    color: themes.colors.primary,
  },

});