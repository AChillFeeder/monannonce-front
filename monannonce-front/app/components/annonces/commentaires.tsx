import { ScrollView, Text, View, StyleSheet } from "react-native";
import { ActivityIndicator, MD2Colors, Searchbar } from 'react-native-paper';
import React, { useState } from "react";

import Commentaire from "./commentaire";

// Composants
import Annonce from './annonce';

// Utils
import { withAuth } from '../../utils/auth'; 
import useFetch from "../../utils/useFetch";

interface AnnoncePage {
    id: number;
    titre: string;
    description: string;
    createdAt: string;
    userId: number;
    commentaires: [];
}

// Liste des annonces
export function Commentaires({id}: {id: string}) {
    const { data, error, loading, refetch } = useFetch<{data: AnnoncePage}>(`/annonces/${id}`);

    if (loading) return <ActivityIndicator animating={true} color={MD2Colors.red800} style={{marginTop: 45}}/>;
    if (error) return <Text>Erreur: {error.message}</Text>;

    return (
        <View style={styles.container}>
            {data?.data.commentaires.map((commentaire: any) => (
                <Commentaire firstName={commentaire.utilisateur.firstName} id={commentaire.id} contenu={commentaire.contenu} createdAt={commentaire.createdAt}/>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 5
    },
    commentaire: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 8,
        marginTop: 10,
        // flexGrow: 2,
    }
});


export default withAuth(Commentaires);
