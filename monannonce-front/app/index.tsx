import { Text, View } from "react-native";
import { Link } from "expo-router";
import { Button, Searchbar } from "react-native-paper";
import React from "react"
import { withAuth } from './utils/auth';

import Annonces  from './components/annonces';
import BottomNavigation  from './components/bottomNavigation';

import AsyncStorage from '@react-native-async-storage/async-storage';

// import { Button } from "@rneui/base";
// 4 écrans avec lien entre eux
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
					const token = await AsyncStorage.getItem('userToken'); // Await the promise
					console.log(token); // Log the token
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