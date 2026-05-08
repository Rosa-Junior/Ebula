import { Dimensions, StyleSheet } from "react-native"; 
import { themes } from "../../style/themes";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: themes.colors.background,
    },
    title: { 
        fontSize: 22, 
        fontWeight: "600", 
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
    button: {
        padding: 6, 
        marginVertical: 14, 
        borderRadius: 12,
        backgroundColor: themes.colors.primary_container
    },
    labelButton: {
        fontSize: 16,
        fontWeight: "600",
        color: themes.colors["surface-container-lowest"], 
    },
    iconButton: {
        justifyContent: "flex-end",
    },
    logoContainer: {
        width: 36,
        height: 36,
        borderRadius: 20,
        backgroundColor: "#deebff",
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
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
    overlay: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: 20,
        backgroundColor: "rgba(0,0,0,0.35)",
    },
    cardTitle: {
        color: themes.colors["surface-container-lowest"],
        fontWeight: "600",
        marginBottom: 6,
    },
    cardSubtitle: {
        color: themes.colors["surface-container-lowest"],
        lineHeight: 20,
    },
    sectionTitle: {
        marginTop: 28,
        marginBottom: 14,
        fontWeight: "bold",
        color: themes.colors.primary,
    },
    recentCard: {
        marginBottom: 12,
        borderRadius: 14,
        backgroundColor: themes.colors["surface-container-lowest"],
        borderWidth: 1,
        borderColor: "#F1F5F9",
    },
    titleCardContext:{
        fontWeight: "bold",
        color: themes.colors.secondary,
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
});