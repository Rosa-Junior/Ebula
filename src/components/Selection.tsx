import * as React from 'react';
import { View } from 'react-native';
import { Button, Menu } from 'react-native-paper';

export default function Example() {
  const [visible, setVisible] = React.useState(false);
  const [selected, setSelected] = React.useState("");

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <View style={{ padding: 20 }}>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Button onPress={openMenu}>
            {selected || "Selecione"}
          </Button>
        }
      >
        <Menu.Item
          onPress={() => {
            setSelected("Masculino");
            closeMenu();
          }}
          title="Masculino"
        />

        <Menu.Item
          onPress={() => {
            setSelected("Feminino");
            closeMenu();
          }}
          title="Feminino"
        />
      </Menu>
    </View>
  );
}