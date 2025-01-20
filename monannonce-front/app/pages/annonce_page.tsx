import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { Link, useLocalSearchParams } from "expo-router";

import { withAuth } from '../utils/auth';
import useFetch from "../utils/useFetch";

interface AnnoncePage {
    id: number;
    title: string;
    description: string;
    createdAt: string;
    userId: number;
}
interface creatorData {
    id: number;
    name: string;
}

// Page d'annonce
function AnnoncePage() {
	const { id } = useLocalSearchParams<{ id: string }>();

	const { data, error, loading, refetch } = useFetch<{data: AnnoncePage}>(`/annonces/${id}`);

    if (loading) return <Text>Chargement des informations de l'annonce...</Text>;
    if (error) return <Text>Erreur: {error.message}</Text>;

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
            <Text style={styles.title}>{data?.data.title}</Text>

			<View style={styles.generalData}>
				<Text style={styles.subtext}>Numéro {id}</Text>
				<Text style={styles.subtext}>Créé le: {data?.data.createdAt}</Text>
				<Text style={styles.subtext}>Créé par (Id): {data?.data.userId}</Text>
			</View>

			<Button icon="delete-outline" mode="contained" style={styles.button}>
				{/* Ne doit être visible que par l'admin et le créateur */}
				Supprimer l'annonce
			</Button>
			<Button icon="file-document-edit-outline" mode="contained" style={styles.editButton}>
				{/* Ne doit être visible que par l'admin et le créateur */}
				Modifier l'annonce
			</Button>


            <View style={styles.container}>
                <Text>{data?.data.description}</Text>
            </View>
			
			<Button icon="alert-circle-outline" mode="contained" style={styles.button}>
				<Link href={{ pathname : '/'}}>Signaler l'annonce</Link> 
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
	generalData: {
		borderColor: 'black',
		borderTopWidth: 1,
		borderBottomWidth: 1,
		padding: 8,
		marginTop: 10
	},
	subtext: {
		borderColor: 'black',
		fontSize: 15,
		fontStyle: 'italic',
		// letterSpacing: 2
	},
	title: {
		fontSize: 25,
		fontWeight: '600',
		letterSpacing: 4
	},
	button: {
		marginTop: 16,
		borderRadius: 0,
		backgroundColor: '#de4918',
	},
	editButton: {
		marginTop: 16,
		borderRadius: 0,
		backgroundColor: '#ffaa18',
	}
});


export default withAuth(AnnoncePage);