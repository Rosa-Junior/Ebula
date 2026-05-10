import { MD3LightTheme } from "react-native-paper";


const colors = {
    primary: "#003d9b",
    "primary_container": "#0052cc",
    background: "#f7f9fb",
    surface: "#f7f9fb",
    "surface-container-lowest": "#ffffff",
    "on-surface": "#191c1e",
    "on-surface-variant": "#434654",
    // outline: "#cbd5e1",
    outline: "#737685",
    "outline_sonic": "#757575",
    "outline-variant": "#c3c6d6",
    "outline_grayscale": "#d6d6d6",
    "outline_safe_silver": "#c0c0c0",
    secondary: "#465f88",
    tertiary: "#374550",
    "secondary_container": "#aec7f6",
    medium_gray: "#737685",
    background_card: "#dbeafe",
    background_noble_gray: "#4f5052",
    red: "#ff0000",
    offline: "#6b7280",
}

export const themes = {
    colors: colors,
    // Fonte padrão Arial, pode ser personalizada conforme necessário
    fonts: {
        regular: "Arial, sans-serif",
    },
    // Ajustes da lib paper
    paperTheme: {
        ...MD3LightTheme,
        dark: false,
        roundness: 2,
        colors:{
            ...MD3LightTheme.colors,
            primary: colors.primary,
            onPrimary: "#fff",
            secondary: colors.secondary,
            
        }
    }
};