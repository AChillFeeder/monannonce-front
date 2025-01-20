import { Text, View } from "react-native";
import { Link } from "expo-router";
import { Button, Searchbar } from "react-native-paper";
import React from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';

// Utils
import { withAuth } from './utils/auth';

// Composants
import Annonces from './components/annonces';


function Index() {
	const [searchQuery, setSearchQuery] = React.useState('');

	return (
		<View
		style={{
			flex: 1,
			alignItems: "center",
			gap: 25,
			padding: 15
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

			<Button icon="account-cog" mode="outlined" style={{
				alignSelf: 'flex-end',
			}} >
				<Link href={{ pathname : '/pages/login'}}>Votre profil</Link> 
			</Button>
			
			<Button icon="account-cog" mode="outlined" style={{
				alignSelf: 'flex-end',
			}} >
				<Link href={{ pathname : '/pages/signalements'}}>Liste des signalements</Link> 
			</Button>


			{/*  */}

			<View style={{width: '100%', flexGrow: 2}}>
				<Text style={{ fontSize: 20 }}>Liste des annonces:</Text>
				<Text>Toutes les annonces</Text>

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

export default withAuth(Index);