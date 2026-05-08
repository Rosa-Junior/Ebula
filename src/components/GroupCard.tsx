import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Text } from "react-native-paper";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { themes } from "../style/themes";

type Props = {
  title: string;
  totalMedicamentos: number;
  onPress: () => void;
};

export default function GroupCard({
  title,
  totalMedicamentos,
  onPress,
}: Props) {
  return (
    <Card style={styles.card}>
      
      <View style={styles.header}>

        <Text style={styles.title}>
          {title}
        </Text>

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
    padding: 18,
    borderRadius: 18,
    marginBottom: 14,
    backgroundColor: themes.colors["surface-container-lowest"],
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
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