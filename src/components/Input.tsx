import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { themes } from "../style/themes";

type Props = {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  backgroundColor?: string;
  borderColor?: string;
  secureTextEntry?: boolean;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  autoCorrect?: boolean;
};

export default function Input({
  label,
  placeholder = "",
  value,
  onChangeText,
  secureTextEntry = false,
  rightIcon,
  onRightIconPress,
  backgroundColor = themes.colors["surface-container-lowest"],
  borderColor = themes.colors.outline,
  keyboardType = "default",
  autoCapitalize = "none",
  autoCorrect = false,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.labelRow}>
        <Text style={styles.label}>{label}</Text>
      </View>

      <View style={[styles.inputWrap, { backgroundColor, borderColor }]}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          placeholderTextColor={themes.colors.outline}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          keyboardType={keyboardType}
          underlineColorAndroid="transparent"
        />
        {rightIcon ? (
            <TouchableOpacity onPress={onRightIconPress} style={styles.iconBtn} activeOpacity={0.7}>
            {rightIcon}
            </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  labelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
    fontFamily: themes.fonts.regular
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
     //fONTE EM CAIXA ALTA,
    fontFamily: themes.fonts.regular,
    color: themes.colors["on-surface-variant"],
  },
   inputWrap: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 12,
    paddingRight: 8,
    overflow: "hidden",
  },
  input: {
     flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 12,
    fontSize: 16,
    color: themes.colors["on-surface"],
    fontFamily: themes.fonts.regular,
  },
  iconBtn: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
// titleInput: {
//         fontSize: 16,
//         color: "#fff",
//         marginTop: 16,
//         marginLeft: 4
//     }