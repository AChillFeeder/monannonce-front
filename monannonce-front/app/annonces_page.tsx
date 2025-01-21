import { Text, View } from "react-native";
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
			padding: 10
		}}
		>
			
			<Button
				icon="account-cog"
				mode="outlined"
				style={{
					alignSelf: 'flex-end',
					backgroundColor: '#de4918',
					borderWidth: 0
				}}
				textColor="white"
				onPress={async () => {
					const token = await AsyncStorage.getItem('userToken'); // Token pour tester
					console.log(token);
				}}
				>
				<Text>DEBUG- Current User Token</Text>
			</Button>

			<Button icon="plus" mode="outlined" style={{
				alignSelf: 'flex-end',
			}} >
				<Link href={{ pathname : '/pages/createAnnonce'}}>Nouvelle annonce</Link> 
			</Button>

			<View style={{
				// width: '100%', 
				// flexGrow: 2
				}}>
				<Text style={{ fontSize: 20, marginTop: 40 }}>Liste des annonces:</Text>
				{/* <Text>Toutes les annonces</Text> */}
				
				<Annonces />
			</View>
		</View>
	);
}

export default withAuth(AnnoncesPage);