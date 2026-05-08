import React, { useState } from "react";
import { View, Text } from "react-native";
import { useAuth } from "../../hooks/useAuth";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Provider as PaperProvider, Menu, BottomNavigation, TextInput, Button } from 'react-native-paper';

// type RootStackParamList = {
//    Home: undefined;
//    Login: undefined;
//    Register: undefined;
//    Detail: {
//     id: number;
//   };
// };

// type Props = {
//    navigation: NativeStackNavigationProp<RootStackParamList, "Detail">;
// };

// type Option = {
//     label: string;
//     value: string;
// };

// export default function DetailScreen({navigation}: Props) {
// const {login } = useAuth();
//   const [email, setEmail] = useState("");
//   const [senha, setSenha] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [snack, setSnack] = useState<{ visible: boolean; msg: string }>({ visible: false, msg: "" });
//   const [showPassword, setShowPassword] = useState(false);
//   return ;
// }
export default function DetailScreen() {
  return (
    <View>
      <Text>Detalhes</Text>
    </View>
  );
}

  
