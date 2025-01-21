import React from "react";
import { View, Text } from "react-native";
import { BottomNavigationCustom } from "./components/bottomNavigationCustom";
import { withAuth } from "./utils/auth";

import { PaperProvider, DefaultTheme } from 'react-native-paper';

const theme = {
	...DefaultTheme,
	roundness: 2,
	colors: {
		...DefaultTheme.colors,
		primary: '#3498db',
		accent: '#f1c40f',
	},
};

export function Index() {
	return (
		<PaperProvider theme={theme}>
			<View style={{ flex: 1, height: '100%', backgroundColor: 'lightblue' }}>
				<BottomNavigationCustom/>
			</View>
		</PaperProvider>
	);
}


export default withAuth(Index);
