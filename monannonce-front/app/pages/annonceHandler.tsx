import React from "react";

// Utils
import { withAuth } from '../utils/auth';
import { BottomNavigationAnnonce } from "../components/bottomNavigationAnnonce";
import { View } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";


//
export function AnnonceHandler() {
	const { id } = useLocalSearchParams<{ id: string }>();
	return (
		<View style={{flex: 1}}>
			<BottomNavigationAnnonce idAnnonce={id}/>
		</View>
	)
}

export default withAuth(AnnonceHandler);