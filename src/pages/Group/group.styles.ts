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
    headerRow: {
        flexDirection: "row",
        alignContent:'flex-start',
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
    button: {
        padding: 6, 
        borderRadius: 12,
        backgroundColor: themes.colors.primary_container
    },
    labelButton: {
        fontSize: 16,
        fontWeight: "600",
        color: themes.colors["surface-container-lowest"], 
    },
    containerCard: {
        flex: 1,
        backgroundColor: themes.colors["surface-container-lowest"], 
    },


    contentCard: {
        padding: 16,
    },
    card: {
    borderRadius: 20,
    backgroundColor: "#fff",
    elevation: 2,
    paddingVertical: 8,
    },

    tagsContainer: {
      flexDirection: "row",
      marginBottom: 18,
      gap: 8,
    },

    categoryBadge: {
      backgroundColor: "#dbeafe",
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 20,
    },

    categoryText: {
      color: themes.colors.primary,
      fontWeight: "700",
      fontSize: 12,
    },

    tarjaBadge: {
      backgroundColor: "#e5e7eb",
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 20,
    },

    tarjaText: {
      color: "#374151",
      fontWeight: "700",
      fontSize: 12,
    },

    titleCard: {
      fontSize: 28,
      fontWeight: "700",
      color: "#0f172a",
      marginBottom: 6,
    },

    subtitleCard: {
      fontSize: 16,
      color: "#64748b",
      marginBottom: 20,
    },

    divider: {
      marginBottom: 20,
      backgroundColor: "#e2e8f0",
    },

    infoContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },

    label: {
      fontSize: 12,
      color: "#94a3b8",
      fontWeight: "700",
      marginBottom: 8,
    },

    infoText: {
      fontSize: 16,
      color: "#0f172a",
      fontWeight: "600",
    },

    containerDetail: {
        flex: 1,
        backgroundColor: themes.colors.background,
    },

    contentDetail: {
      paddingBottom: 32,
    },

    notFoundContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },

    groupInfoCard: {
      marginHorizontal: 16,
      marginTop: 20,
      borderRadius: 20,
      elevation: 2,
      backgroundColor: "#fff",
    },

    groupTitle: {
      fontWeight: "700",
      color: "#1e293b",
      marginBottom: 8,
    },

    groupDescription: {
      color: "#64748b",
      lineHeight: 22,
    },

    chipsContainer: {
      flexDirection: "row",
      marginTop: 18,
    },

    sectionTitle: {
      marginTop: 28,
      marginBottom: 12,
      marginHorizontal: 18,
      fontWeight: "700",
      color: "#334155",
    },

});