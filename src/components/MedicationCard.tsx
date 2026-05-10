import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { themes } from "../style/themes";

type Props = {
  title: string;
  subtitle: string;
  onPress: () => void;
};

export default function MedicationCard({ title, subtitle, onPress, }: Props) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Card style={styles.recentCard}>
        <Card.Content style={styles.cardContent}>
          
          {/* Left */}
          <View style={styles.leftContent}>
            
            <View style={styles.logoContainer}>
              <FontAwesome6
                name="capsules"
                size={16}
                color={themes.colors.primary}
              />
            </View>

            <View style={styles.textContainer}>
              <Text
                variant="titleMedium"
                style={styles.titleCardContext}
              >
                {title}
              </Text>

              <Text variant="bodyMedium">
                {subtitle}
              </Text>
            </View>

          </View>

          {/* Right */}
          <FontAwesome6
            name="chevron-right"
            size={18}
            color={themes.colors.secondary}
          />

        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

    recentCard: {
      borderRadius: 14,
      backgroundColor: themes.colors["surface-container-lowest"],
      borderWidth: 1,
      borderColor: themes.colors.surface,
    },
    cardContent: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    leftContent: {
      flexDirection: "row",
      alignItems: "center",
      color: themes.colors["surface-container-lowest"],
    },
    logoContainer: {
      width: 36,
      height: 36,
      borderRadius: 20,
      backgroundColor: themes.colors.background_card,
      justifyContent: "center",
      alignItems: "center",
      margin: 8,
    },
    textContainer: {
      marginLeft: 12,
    },
    titleCardContext:{
      fontWeight: "bold",
      color: themes.colors.secondary,
    },
});