import { Text, View } from "react-native";
import { ActivityIndicator, MD2Colors, Searchbar } from 'react-native-paper';
import React, { useState } from "react";

// Composants
import Annonce from './annonce';

// Utils
import { withAuth } from '../../utils/auth'; 
import useFetch from "../../utils/useFetch";

interface Annonce {
    id: number;
    title: string;
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
            annonce.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
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

            {filteredData?.map((annonce: any) => (
                <Annonce
                    key={annonce.id}
                    id={annonce.id}
                    titre={annonce.title}
                    description={annonce.description}
                />
            ))}
        </View>
    );
}

export default withAuth(Annonces);
