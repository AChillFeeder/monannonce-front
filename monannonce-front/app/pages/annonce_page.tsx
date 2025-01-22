import { Text, View, StyleSheet, Image } from "react-native";
import { Button } from "react-native-paper";
import { Link } from "expo-router";
import React from "react";

// PAPER
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { withAuth } from '../utils/auth';
import useFetch from "../utils/useFetch";
import { BASE_URL } from "../utils/useFetch";

interface AnnoncePage {
    id: number;
    titre: string;
    description: string;
    createdAt: any;
    userId: number;
	createur: any;
	prix: string;
	filepath: string;
}

// Page d'annonce
export function AnnoncePage({ id }: { id: string }) {
    const { data, error, loading } = useFetch<{ data: AnnoncePage }>(`/annonces/${id}`);

    if (loading) {
        return (
            <ActivityIndicator animating={true} color={MD2Colors.red800} style={{ marginTop: 45 }} />
        );
    }

    if (error) {
        return <Text style={styles.errorText}>Erreur: {error.message}</Text>;
    }

    return (
        <View style={styles.container}>
            {/* General Data Section */}
            <View style={styles.card}>
                <Text style={styles.title}>{data?.data.titre}</Text>
                <Text style={styles.subtext}>Numéro: {id}</Text>
                <Text style={styles.subtext}>Créé le: {new Date(data?.data.createdAt).toLocaleDateString()}</Text>
                <Text style={styles.subtext}>Créé par: {data?.data.createur?.firstName}</Text>
                <Text style={styles.price}>Prix: {data?.data.prix} €</Text>
                <Image
                    style={styles.image}
                    source={{ uri: BASE_URL + data?.data.filepath }}
                />
            </View>

            {/* Description Section */}
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>{data?.data.description}</Text>
            </View>

            {/* Actions Section */}
            <View style={styles.actions}>
                {/* First Row of Buttons */}
                <View style={styles.buttonRow}>
                    <Button
                        icon="currency-eur"
                        mode="contained"
                        style={[styles.button, styles.achatButton]}
                    >
                        <Link href={`/pages/createSignalement`} style={styles.buttonText}>
                            Acheter ce produit
                        </Link>
                    </Button>
                    <Button
                        icon="alert-circle-outline"
                        mode="contained"
                        style={[styles.button, styles.reportButton]}
                    >
                        <Link href={`/pages/createSignalement`} style={styles.buttonText}>
                            Signaler l'annonce
                        </Link>
                    </Button>
                </View>

                {/* Second Row of Buttons */}
                <View style={styles.buttonRow}>
                    <Button
                        icon="delete-outline"
                        mode="contained"
                        style={[styles.button, styles.deleteButton]}
                    >
                        Supprimer l'annonce
                    </Button>
                    <Button
                        icon="file-document-edit-outline"
                        mode="contained"
                        style={[styles.button, styles.editButton]}
                    >
                        Modifier l'annonce
                    </Button>
                </View>
				{/* <View style={{height: 1500}}>
				</View> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#f9f9f9",
		paddingBottom: 60
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, // Shadow for Android
        marginBottom: 16,
        borderWidth: 1,
        borderColor: "#ddd",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 8,
    },
    subtext: {
        fontSize: 14,
        color: "#555",
        marginBottom: 4,
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#007bff",
        marginVertical: 8,
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 8,
        marginTop: 16,
    },
    descriptionContainer: {
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        borderWidth: 1,
        borderColor: "#ddd",
        marginBottom: 16,
    },
    descriptionText: {
        fontSize: 14,
        color: "#555",
        lineHeight: 20,
    },
    actions: {
        gap: 12,
		paddingBottom: 60
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 0,
    },
    button: {
        flex: 1,
        marginHorizontal: 4,
        borderRadius: 8,
        paddingVertical: 8,
    },
    achatButton: {
        backgroundColor: "#28a745",
    },
    reportButton: {
        backgroundColor: "#ffc107",
    },
    deleteButton: {
        backgroundColor: "#dc3545",
    },
    editButton: {
        backgroundColor: "#007bff",
    },
    buttonText: {
        color: "#fff",
        fontSize: 14,
        textAlign: "center",
    },
    errorText: {
        color: "red",
        fontSize: 16,
        textAlign: "center",
        marginTop: 16,
    },
});

export default withAuth(AnnoncePage);
