import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import { AnnoncesPage } from '../../annonces_page';
import Signalements from '../../pages/signalement/signalements';
import { UserProfil } from '../../pages/user/user_profil';
import Login from '../../pages/user/login';


export const BottomNavigationCustom = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'annoncesPage', title: 'Annonces', focusedIcon: 'newspaper', unfocusedIcon: 'newspaper-variant-outline'},
    { key: 'signalements', title: 'Signalements', focusedIcon: 'file-alert', unfocusedIcon: 'file-alert-outline'},
    { key: 'user_profil', title: 'Profil', focusedIcon: 'account-cog', unfocusedIcon: 'account-cog-outline'},
    { key: 'logout', title: 'déconnexion', focusedIcon: 'logout', unfocusedIcon: 'logout'},
  ]);

  // Pour debug
  // const renderScene = BottomNavigation.SceneMap({
  //   index: () => <Text style={{ color: 'red' }}>Index Content</Text>,
  //   signalements: () => <Text style={{ color: 'blue' }}>Signalements Content</Text>,
  // });
  const renderScene = BottomNavigation.SceneMap({
    annoncesPage: () => <AnnoncesPage />,
    signalements: () => <Signalements />,
    user_profil: () => <UserProfil />,
    logout: () => <Login />
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: '', opacity: 1, zIndex: 99 }}
      style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%', zIndex: 99 }}
    />
  );
};
