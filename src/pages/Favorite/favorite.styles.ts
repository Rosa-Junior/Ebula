import { Dimensions, StyleSheet } from "react-native"; 
import { themes } from "../../style/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themes.colors.background,
    },
    content: {
        paddingHorizontal: 18,
        paddingVertical: 18,
        color: themes.colors.outline,
        gap: 25
    },
    textGroup: {
        flex: 1,
    },
    title: { 
        fontSize: 22, 
        fontWeight: "bold", 
        color: themes.colors.primary, 
        fontFamily: themes.fonts.regular,
        textAlign: "left",
        marginBottom: 10,
    },
    subtitle: { 
        fontSize: 18, 
        fontWeight: "400",
        fontFamily: themes.fonts.regular,
        color: themes.colors["on-surface-variant"], 
        textAlign: "left",
        marginVertical: 6,
    },
    search: {
        backgroundColor: themes.colors["surface-container-lowest"],
        borderWidth: 1,
        borderColor: themes.colors.outline_grayscale,
        borderRadius: 12,
        elevation: 0,
        height: 52,
    },
    searchInput: {
        color: themes.colors["on-surface-variant"],
        fontSize: 15,
    },
});