import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { themes } from "../style/themes";

type Props = {
  label: string;
  onPress: () => void;
  icon?: React.ReactNode;
  backgroundColor?: string;
  borderColor?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
};

export default function Button({
  label,
  onPress,
  icon,
  backgroundColor = themes.colors.primary_container,
  borderColor = themes.colors.primary_container,
  disabled = false,
  fullWidth = false,
  loading = false,
}: Props) {
    const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          alignSelf: fullWidth ? "stretch" : "center",
          backgroundColor: isDisabled ? themes.colors.tertiary : backgroundColor,
          borderColor: isDisabled ? themes.colors.tertiary : borderColor,
        },
      ]}
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.7}
    >
        <View style={styles.content}>
            {icon ? <Text style={styles.icon}>{icon}</Text> : null}
            <Text style={styles.text}>{label}</Text>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 4,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 14,
    minHeight: 48,
    justifyContent: "center"
  },
  content: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: themes.colors["surface-container-lowest"],
    fontWeight: "600",
    marginRight: 8,
  },
  text: {
    color: themes.colors["surface-container-lowest"],
    fontWeight: "600",
  }
});

// uso icon
// icon={<Icon name="star" size={16} color="white" />}
// libs
// react-native-vector-icons
// expo/vector-icons