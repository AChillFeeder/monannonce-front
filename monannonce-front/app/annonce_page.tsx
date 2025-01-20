import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { Link, useLocalSearchParams } from "expo-router";
import ReactImageGallery from "react-image-gallery";
import { withAuth } from './utils/auth';

// Page d'annonce
function AnnoncePage() {
    const { id } = useLocalSearchParams<{ id: string }>();

    const images=[
      { source: { uri: 'http://i.imgur.com/XP2BE7q.jpg' } },
      { source: { uri: 'http://i.imgur.com/5nltiUd.jpg' } },
      { source: { uri: 'http://i.imgur.com/6vOahbP.jpg' } },
      { source: { uri: 'http://i.imgur.com/kj5VXtG.jpg' } }
    ]


    return (
        <View style={{
            padding: 10,
        }}>
            <Text style={styles.title}>Page de l'annonce</Text>
            <Text>Id: {id}</Text>


            <View style={styles.container}>
                <Text>Description de l'annonce ici</Text>

                <Button icon="alert-circle-outline" mode="contained" style={styles.button}>
                    <Link href={{ pathname : '/annonce_page'}}>Signaler l'annonce</Link> 
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 8,
    marginTop: 10
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  button: {
    marginTop: 16,
    borderRadius: 0,
    backgroundColor: '#de4918',
  }
});


export default withAuth(AnnoncePage);