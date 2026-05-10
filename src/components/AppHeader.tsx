import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Appbar } from "react-native-paper";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { MaterialIcons } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';

import { themes } from "../style/themes";

type Props = {
  title?: string;
  nameIcon: string;
  rightAction?: "profile" | "logout" | "back" | "none";
  onProfilePress?: () => void;
  onLogoutPress?: () => void;
  onBack?: () => void;
};

export default function AppHeader({ 
    title = "EBula", 
    nameIcon, 
    rightAction = "profile", 
    onProfilePress, 
    onLogoutPress,
    onBack
}: Props) {
  return (
    <Appbar.Header style={styles.appbar}>
      <View style={styles.leftContainer}>
        <View style={styles.logoContainer}>
            <FontAwesome6
                name={nameIcon}
                size={18}
                color={themes.colors.primary}
            />
      </View>
      <Text style={styles.appbarTitle}>
        {title}
      </Text>
    </View>

      {rightAction === "profile" &&  (
        <Appbar.Action
          icon="account-circle-outline"
          iconColor={themes.colors.primary}
          onPress={onProfilePress}
        />
      )}
      {rightAction === "logout" &&  (
        <Appbar.Action
          icon="logout"
          iconColor={themes.colors.primary}
          onPress={onLogoutPress}
        />
      )}
      {rightAction === "back" &&  (
        <Appbar.Action
            icon={({ size, color }) => (
                <AntDesign
                    name="rollback"
                    size={20}
                    color={themes.colors.primary}
                />
            )}
          iconColor={themes.colors.primary}
          onPress={onBack}
        />
      )}

    </Appbar.Header>
  );
}
{/* <AppHeader showProfile={false} /> */} // esconder o avatar
{/* <AppHeader   //ação no perfil
   onProfilePress={() => navigation.navigate("Profile")}
/> */}

const styles = StyleSheet.create({
  appbar: {
    backgroundColor: themes.colors["surface-container-lowest"],
    elevation: 2,
    justifyContent: "space-between",
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: themes.colors.outline_grayscale,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  appbarTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: themes.colors.primary,
    letterSpacing: 0.3,
  },
  logoContainer: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: themes.colors.background_card,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 6,
  },
});