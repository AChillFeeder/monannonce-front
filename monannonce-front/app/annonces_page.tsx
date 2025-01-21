import { Text, View } from "react-native";
import { Link } from "expo-router";
import { Button, Searchbar, BottomNavigation } from "react-native-paper";
import React from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';

// Utils
import { withAuth } from './utils/auth';

// Composants
import Annonces from './components/annonces';
import { BottomNavigationCustom } from "./components/bottomNavigationCustom";

export function AnnoncesPage() {
	const [searchQuery, setSearchQuery] = React.useState('');

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
				<Link href={{ pathname : '/pages/login'}}>Nouvelle annonce</Link> 
			</Button>

			<View style={{
				// width: '100%', 
				// flexGrow: 2
				}}>
				<Text style={{ fontSize: 20, marginTop: 40 }}>Liste des annonces:</Text>
				{/* <Text>Toutes les annonces</Text> */}

				<Searchbar 
					placeholder="Filtrer les annonces"
					value={searchQuery}
					onChangeText={setSearchQuery}
					mode='view'
					showDivider={true}
				/>
				
				<Annonces />
			</View>
		</View>
	);
}

export default withAuth(AnnoncesPage);