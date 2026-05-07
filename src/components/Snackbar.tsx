import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Animated, Platform } from "react-native";
import { themes } from "../style/themes";

type Props = { 
    visible: boolean; 
    message: string; 
    onClose?: () => void
    durationMs?: number; 
};

export default function Snackbar({ visible, message, onClose, durationMs = 3000 }: Props) {
    const [anim] = React.useState(() => new Animated.Value(0));
    
    React.useEffect(() => {
        if (visible) {
            Animated.timing(anim, { 
                toValue: 1, 
                duration: 200, 
                useNativeDriver: false })
                .start();
            const t = setTimeout(() => {
                Animated.timing(anim, { 
                    toValue: 0, 
                    duration: 200, 
                    useNativeDriver: false })
                    .start(() => {
                onClose && onClose();
                });
            }, durationMs);
            return () => clearTimeout(t);
        } else {
        Animated.timing(anim, { toValue: 0, duration: 150, useNativeDriver: false }).start();
        }
    }, [visible, durationMs, onClose, anim]);
    
    if (!visible) return null;

    return (
        <Animated.View style={[styles.container,{ transform: [{ translateY: anim.interpolate({ inputRange: [0, 1], outputRange: [40, 0] }) }], 
            opacity: anim }, 
            ]} pointerEvents="box-none"
        >
            <View style={styles.card}>
                <Text style={styles.text}>{message}</Text>
                <TouchableOpacity onPress={() => onClose && onClose()}>
                    <Text style={styles.action}>OK</Text>
                </TouchableOpacity>
            </View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 30,
    left: 16,
    right: 16,
    alignItems: "center",
    zIndex: 999,
  },
  card: {
    fontFamily: themes.fonts.regular,
    backgroundColor: themes.colors.background_noble_gray,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minWidth: "60%",
    elevation: 6,
    ...Platform.select({
      web: {
        boxShadow: "offsetY 2px, blur 6px, rgba alpha 0.08",
      },
      android: {
        elevation: 6,
      },
      ios: {
        shadowColor: themes.colors.background_noble_gray,
        shadowOpacity: 0.08,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
      },
    }),
  },
  text: { 
    color: themes.colors.surface,
    flex: 1,
    marginRight: 12,
  },
  action: { color: themes.colors.primary_container, 
    fontWeight: "600", 
    marginLeft: 8, 
  },
});
