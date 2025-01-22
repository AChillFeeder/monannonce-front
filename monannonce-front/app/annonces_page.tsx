import { ScrollView, Text, View } from "react-native";
import { Link } from "expo-router";
import { Button, Searchbar, BottomNavigation } from "react-native-paper";
import React from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';

// ******************** //
// ******************** //
// Je garde cette page hors du dossier pages vu que cette page est presque l'index de l'application
// Ceci est la première page visitèe par l'application
// ******************** //

// Utils
import { withAuth } from './utils/auth';

// Composants
import Annonces from './components/annonces/annonces';

export function AnnoncesPage() {

	return (
		<View
		style={{
			flex: 1,
			// alignItems: "center",
			gap: 10,
			padding: 10,
		}}
		>
			<View style={{}}>
				{/* <Button
					icon="account-cog"
					mode="outlined"
					style={{
						alignSelf: 'flex-end',
						backgroundColor: '#de4918',
						borderWidth: 0
					}}
					textColor="white"
					onPress={async () => {
						const token = await AsyncStorage.getItem('userToken'); // Pour trouver le token actuel
						console.log(token);
					}}
					>
					<Text>DEBUG- Current User Token</Text>
				</Button> */}

				<Button icon="plus" mode="outlined" style={{
					alignSelf: 'flex-end',
				}} >
					<Link href={{ pathname : '/pages/createAnnonce'}}>Nouvelle annonce</Link> 
				</Button>
				<Button icon="plus" mode="elevated" style={{
					alignSelf: 'flex-end',
					marginTop: 10
				}} >
					<Link href={{ pathname : '/pages/annonceHandler'}}>Annonce page handler</Link> 
				</Button>

			</View>

			<Text style={{ fontSize: 20, marginTop: 10, marginBottom: 10 }}>Liste des annonces:</Text>
			<View style={{
				flex: 1,
			}}>
				<Annonces />
			</View>

			<View style={{height: 80}}>
			</View>
		</View>
	);
}

export default withAuth(AnnoncesPage);