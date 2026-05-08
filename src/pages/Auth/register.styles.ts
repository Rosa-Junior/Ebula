import { Dimensions, StyleSheet } from "react-native"; 
import { themes } from "../../style/themes";

export const styles = StyleSheet.create({
    // Fonte padrão Arial
    container: {
        flex: 1,
        backgroundColor: themes.colors.background,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    boxTop: {
        maxWidth: 440,
        alignItems: "center",
        marginBottom: 20,
    },
    logo: { 
        width: 150, 
        height: 150,
        alignItems: "center",
    },
    title: { 
        fontSize: 22, 
        fontWeight: "600", 
        color: themes.colors.primary, 
        fontFamily: themes.fonts.regular,
        textAlign: "center",
        marginBottom: 10,
    },
    subtitle: { 
        fontSize: 18, 
        fontWeight: "400",
        fontFamily: themes.fonts.regular,
        color: themes.colors["on-surface-variant"], 
        textAlign: "center",
        marginVertical: 6,
    },

    boxMid: {
        width: "100%",
        backgroundColor: themes.colors["surface-container-lowest"],
        borderColor: themes.colors["outline-variant"],
        borderWidth: 1,
        borderRadius: 12,
        padding: 30,
        paddingVertical: 40,
        shadowColor: "#001",
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 6,
        marginBottom: 16,
    },
    boxButton: {
        width: "100%",
        paddingHorizontal: 0,
         marginBottom: 6,
    },
    registerLink: {
        marginTop: 16,
        alignItems: 'center',
    },
    registerText: {
        color: themes.colors.primary,
        fontSize: 14,
        fontWeight: "600",
    },
    forgotRow: { 
        marginTop: 8, 
        alignSelf: "flex-end" 
    },
    forgotText: { 
        color: themes.colors.primary, 
        fontWeight: "600" },

    divider: { 
        height: 1, 
        backgroundColor: themes.colors["outline-variant"], 
        marginVertical: 16, 
        opacity: 0.6 
    },
    createRow: { alignItems: "center" },
    createText: { color: themes.colors["on-surface-variant"] },
    createLink: { 
        color: themes.colors.primary, 
        fontWeight: "600", 
        marginLeft: 4 
    },
    iconColor: { color: themes.colors.outline },
    btnBackground: { backgroundColor: themes.colors.primary_container },
})