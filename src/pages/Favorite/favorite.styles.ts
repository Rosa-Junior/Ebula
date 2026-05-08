import { Dimensions, StyleSheet } from "react-native"; 
import { themes } from "../../style/themes";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    content: {
        padding: 16,
    },

    search: {
        marginBottom: 20,
    },

    highlightCard: {
        marginBottom: 24,
        borderRadius: 16,
        overflow: "hidden",
    },

    cardTitle: {
        marginVertical: 12,
    },

    sectionTitle: {
        marginBottom: 12,
        fontWeight: "bold",
    },

    recentCard: {
        marginBottom: 12,
        borderRadius: 12,
    },
});