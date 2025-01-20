import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { Link } from "expo-router";

// Liste des annonces
interface AnnonceProps {
    id: number;
    titre: string;
    description: string;
  }

export default function Annonce({id, titre, description}: AnnonceProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{titre}</Text>
            <Text>{description}</Text>

            <Button icon="eye" mode="contained" style={styles.button}>
				{/* <Link href={{ pathname : '/annonce_page'}}>Visiter l'annonce</Link> */}
				<Link href={`/annonce_page?id=${id}`}>
					Visiter l'annonce
				</Link>
            </Button>
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
    borderRadius: 0
  }
});