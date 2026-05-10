import { Dimensions, StyleSheet } from "react-native"; 
import { themes } from "../../style/themes";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: themes.colors.background,
    },
    content: {
        marginTop: 10,
        paddingHorizontal: 18,
        paddingVertical: 18,
        color: themes.colors.outline,
        gap: 25
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
    highlightCard: {
        borderRadius: 16,
        overflow: "hidden",
        elevation: 4,
        backgroundColor: themes.colors["surface-container-lowest"],
    },
    overlay: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: 20,
        backgroundColor: "rgba(0,0,0,0.35)",
    },
    cardImage: {
        height: 210,
    },
    cardTitle: {
        color: themes.colors["surface-container-lowest"],
        fontWeight: "600",
        paddingHorizontal: 10,
        paddingTop: 8,
    },
    cardSubtitle: {
        color: themes.colors["surface-container-lowest"],
        lineHeight: 20,
        paddingHorizontal: 10,
        paddingBottom: 8
    },
    sectionTitle: {
        marginTop: 10,
        fontWeight: "bold",
        color: themes.colors.primary,
    },
});