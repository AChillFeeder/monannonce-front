import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import { AnnoncePage } from '../pages/annonce_page';
import { Commentaires } from './annonces/commentaires'


export const BottomNavigationAnnonce = ({idAnnonce}: {idAnnonce: string}) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Annonce', title: 'Description', focusedIcon: 'newspaper', unfocusedIcon: 'newspaper-variant-outline'},
    { key: 'Commentaires', title: 'Commentaires', focusedIcon: 'comment-multiple-outline', unfocusedIcon: 'comment-multiple'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Annonce: () => <AnnoncePage id={idAnnonce}/>,
    Commentaires: () => <Commentaires id={idAnnonce}/>
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
