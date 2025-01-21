import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { Link, useLocalSearchParams } from "expo-router";
import React from "react";

// PAPER
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import CreateSignalement from "../components/signalement/signalement_create";

// Utils
import { withAuth } from '../utils/auth';
import useFetch from "../utils/useFetch";

interface AnnoncePage {
    id: number;
    title: string;
    description: string;
    createdAt: string;
    userId: number;
}

// Page d'annonce
export function AnnoncePage() {
	const [visible, setVisible] = React.useState(false);

	const showDialog = () => {console.log('show dialog');setVisible(true)};
	const hideDialog = () => setVisible(false);

	const { id } = useLocalSearchParams<{ id: string }>();

	const { data, error, loading, refetch } = useFetch<{data: AnnoncePage}>(`/annonces/${id}`);

    if (loading) return <ActivityIndicator animating={true} color={MD2Colors.red800} style={{marginTop: 45}}/>;
    if (error) return <Text>Erreur: {error.message}</Text>;

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

            <View style={styles.container}>
                <Text>{data?.data.description}</Text>
            </View>

			<Button
				icon="alert-circle-outline"
				mode="contained"
				style={styles.button}
				onPress={showDialog}
			>
				Signaler l'annonce
			</Button>

			<Button icon="delete-outline" mode="contained" style={styles.button}>
				{/* Ne doit être visible que par l'admin et le créateur */}
				{/* ARCHIVE / ne supprime pas!! */}
				Supprimer l'annonce
			</Button>
			<Button icon="file-document-edit-outline" mode="contained" style={styles.editButton}>
				{/* Ne doit être visible que par l'admin et le créateur */}
				Modifier l'annonce
			</Button>

			{/* Dialog component */}
			<CreateSignalement
				visible={visible}
			/>
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