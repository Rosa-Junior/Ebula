import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Text } from "react-native-paper";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { themes } from "../style/themes";

type Props = {
  title: string;
  description: string,
  totalMedicamentos: number;
  onPress: () => void;
};

export default function GroupCard({
  title,
  description,
  totalMedicamentos,
  onPress,
}: Props) {
  return (
    <Card style={styles.card}>
      
      <View style={styles.headerRow}>
        <View style={styles.header}>
            <Text style={styles.title}>
            {title}
            </Text>
            <Text style={styles.description}>
            {description}
            </Text>
        </View>    
        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            {totalMedicamentos} medicamentos
          </Text>
        </View>

      </View>

      <TouchableOpacity
        style={styles.detailsButton}
        onPress={onPress}
      >
        <Text style={styles.detailsText}>
          VER DETALHES
        </Text>

        <MaterialCommunityIcons
          name="arrow-right"
          size={16}
          color={themes.colors.primary}
        />
      </TouchableOpacity>

    </Card>
  );
}

const styles = StyleSheet.create({

  card: {
    paddingHorizontal: 18,
    paddingVertical: 28,
    borderRadius: 18,
    backgroundColor: themes.colors["surface-container-lowest"],
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  header: {
    flex: 1,
    marginRight: 10,
    gap: 8,
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
    color: themes.colors["on-surface-variant"],
  },
  description:{
    fontSize: 14,
    fontFamily: themes.fonts.regular,
    fontWeight: "semibold",
    color: themes.colors["on-surface-variant"],
  },
  badge: {
    backgroundColor:themes.colors.background_card,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  badgeText: {
    fontSize: 12,
    fontWeight: "600",
    color: themes.colors.primary,
  },

  detailsButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
    gap: 4,
  },

  detailsText: {
    fontSize: 12,
    fontWeight: "700",
    color: themes.colors.primary,
  },
});