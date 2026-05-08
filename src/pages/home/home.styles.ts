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
        color: themes.colors.outline
    },
    search: {
        marginBottom: 20,
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
        marginVertical: 14,
        elevation: 4,
        backgroundColor: themes.colors["surface-container-lowest"],
    },
    cardImage: {
        height: 210,
    },
    cardTitle: {
        color: themes.colors["surface-container-lowest"],
        fontWeight: "600",
        marginBottom: 6,
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
        marginTop: 28,
        marginBottom: 14,
        fontWeight: "bold",
        color: themes.colors.primary,
    },
});