import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { Button } from "react-native-paper";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient
import { BASE_URL } from "../../utils/useFetch";

// Liste des annonces
interface AnnonceProps {
    id: number;
    titre: string;
    description: string;
    image: string;
}

export default function Annonce({ id, titre, description, image }: AnnonceProps) {
    
	image = image || 'images/default.jpg'
	return (
        <ImageBackground
            source={{ uri: BASE_URL + '/' + image }}
            // source={{ uri: 'https://orion-uploads.openroadmedia.com/xl_56b644749fe6-32975724116_8a972ba6a3_k.jpg' }}
            style={styles.background}
            resizeMode="cover"
			// alt= {BASE_URL + '/' + image }
        >
            <LinearGradient
                colors={["rgba(0, 0, 0, 0.6)", "rgba(0, 0, 0, 0.25)"]}
                style={styles.overlay}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            >
                <Text style={styles.title}>{titre}</Text>
                {/* <Text style={styles.description}>{description}</Text> */}

                <Button icon="eye" mode="contained" style={styles.button}>
                    <Link href={`/pages/annonceHandler?id=${id}`} style={styles.buttonText}>
                        Visiter l'annonce
                    </Link>
                </Button>
            </LinearGradient>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        marginTop: 10,
        overflow: "hidden",
        borderWidth: 2,
    },
    overlay: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 20,
    },
    description: {
        fontSize: 14,
        color: "#ddd",
        marginBottom: 16,
        textAlign: "center",
    },
    button: {
        backgroundColor: "#007bff",
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    buttonText: {
        color: "#fff",
        fontSize: 14,
        textAlign: "center",
    },
});
