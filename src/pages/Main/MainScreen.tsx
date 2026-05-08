import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import HomeScreen from '../Home/HomeScreen';
import FavoriteScreen from '../Favorite/FavoriteScreen';
import GroupScreen from '../Group/GroupScreen';

type Route = {
  key: string;
  title: string;
  focusedIcon: string;
  unfocusedIcon: string;
};

const MainScreen = () => {

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'home',
      title: 'Home',
      focusedIcon: 'home',
      unfocusedIcon: 'home-outline',
    },
    {
      key: 'favorite',
      title: 'Favoritos',
      focusedIcon: 'heart',
      unfocusedIcon: 'heart-outline',
    },
    {
      key: 'group',
      title: 'Grupos',
      focusedIcon: 'folder',
      unfocusedIcon: 'folder-outline',
    },
  ]);

  const renderScene = ({ route }: {route: Route}) => {
    switch (route.key) {
        case "home": return <HomeScreen />;
        case "favorite": return <FavoriteScreen />;
        case "group": return <GroupScreen />;
    default: return null;
    }
   };

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}

export default MainScreen;