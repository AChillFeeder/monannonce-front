import { Text, View, StyleSheet } from "react-native";
import { ActivityIndicator, MD2Colors, Button } from 'react-native-paper';
import { Link } from "expo-router";
import React from "react";

import Commentaire from "./commentaire";

//*******************
//*******************
// IMPORT CREATE SIGNALEMENT //
//*******************
//*******************


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
            <Button icon="plus" mode="outlined" style={{
					alignSelf: 'flex-end',
                    margin: 10
				}} >
				<Link href={{ pathname : '/components/signalement/signalement_create'}}>Ajouter un commentaire</Link> 
			</Button>
            {data?.data.commentaires.map((commentaire: any) => (
                <Commentaire key={commentaire.id} firstName={commentaire.utilisateur.firstName} id={commentaire.id} contenu={commentaire.contenu} createdAt={commentaire.createdAt}/>
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
