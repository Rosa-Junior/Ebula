import { Dimensions, StyleSheet } from "react-native"; 


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#878af6",
    },
    boxTop: {  
        height: Dimensions.get("window").height/3,
        width: "100%",
        backgroundColor: "#e1e2f5",
        alignItems: "center",
        justifyContent: "center",
    },
    boxMid: {
        height: Dimensions.get("window").height/3,
        width: "100%",
        backgroundColor: "#7082d1",
        paddingHorizontal: 40,

    },
    boxBottom: {
        height: Dimensions.get("window").height/3,
        width: "100%",
        backgroundColor: "#7082d1",
        paddingHorizontal: 40,
    }, 
    logo: {
        width: 260,
        height: 100,
    },
    titleImput: {
        fontSize: 20,
        color: "#fff",
        marginTop: 20,
    },
    boxInput: {
        backgroundColor: "#fff",
        borderRadius: 10,
        marginTop: 10,
        paddingHorizontal: 10,
    }
})