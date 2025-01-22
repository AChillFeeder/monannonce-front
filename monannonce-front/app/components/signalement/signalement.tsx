import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { Link } from "expo-router";

interface SignalementProps {
    id: number;
    titre: string; // temporaire
    description: string; // temporaire
}

export default function Signalement({id, titre, description}: SignalementProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{titre}</Text>
			<Text>Id: {id}</Text>
            <Text>{description}</Text>

			<Button icon="eye" mode="contained" style={styles.button} buttonColor="#f75736">
				{/* <Link href={{ pathname : '/annonce_page'}}>Visiter l'annonce</Link> */}
				<Link href={`/pages/annonce_page?id=${id}`}>
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