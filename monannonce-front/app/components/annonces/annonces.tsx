import { ScrollView, Text, View } from "react-native";
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
            <ScrollView style={{overflow: 'scroll'}}>
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

export default withAuth(Annonces);
