import { ScrollView, Text, View, StyleSheet } from "react-native";
import { ActivityIndicator, MD2Colors, Searchbar } from 'react-native-paper';
import React, { useState } from "react";

// Composants
import Annonce from './annonce';

// Utils
import { withAuth } from '../../utils/auth'; 
import useFetch from "../../utils/useFetch";

interface Annonce {
    id: number;
    titre: string;
    description: string;
    createdAt: string;
    userId: number;
}

// Liste des annonces
function Annonces() {
    const { data, error, loading, refetch } = useFetch<{data: Annonce[]}>('/annonces');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredData = data?.data.filter(
        (annonce) =>
            annonce.titre.toLowerCase().includes(searchQuery.toLowerCase()) ||
            annonce.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (loading) return <ActivityIndicator animating={true} color={MD2Colors.red800} style={{marginTop: 45}}/>;
    if (error) return <Text>Erreur: {error.message}</Text>;

    return (
        <View>
            <Searchbar 
                placeholder="Filtrer les annonces"
                value={searchQuery}
                onChangeText={setSearchQuery}
                style={{ marginBottom: 10 }}
            />
            <ScrollView 
                contentContainerStyle={styles.scrollViewContent} 
                style={styles.scrollView}
            >
                {filteredData?.map((annonce: any) => (
                    <Annonce
                        key={annonce.id}
                        id={annonce.id}
                        titre={annonce.titre}
                        description={annonce.description}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2, // Shadow for Android
        marginBottom: 16,
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: "flex-start",
        gap: 10, // Add spacing between child components
    },
});


export default withAuth(Annonces);
