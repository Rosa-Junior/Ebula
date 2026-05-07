import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { themes } from "../style/themes";

type Props = {
  title: string;
  icon: string;
  onPress: () => void;
};

export default function Card({ title, icon, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.content}>
        <Ionicons name={icon as any} size={32} color="#1E3A8A" />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "45%",
    aspectRatio: 1,
    fontFamily: themes.fonts.regular,
    backgroundColor: themes.colors.background_card, 
    borderRadius: 16,
    margin: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    gap: 8,
  },
  title: {
    color: themes.colors.primary, 
    fontWeight: "600",
    textAlign: "center",
    fontFamily: themes.fonts.regular
  },
});