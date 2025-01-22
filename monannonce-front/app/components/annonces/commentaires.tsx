import { Modal, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { ActivityIndicator, MD2Colors, Button } from 'react-native-paper';
import { Link } from "expo-router";
import React, { useState } from "react";

import Commentaire from "./commentaire";

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
export function Commentaires({ id }: { id: string }) {
    const { data, error, loading, refetch } = useFetch<{ data: AnnoncePage }>(`/annonces/${id}`);
    const [modalVisible, setModalVisible] = useState(false);
    const [newComment, setNewComment] = useState("");

    const handleAddComment = () => {
        // TODO: Add logic to send the new comment to the server
        console.log("New comment:", newComment);
        setModalVisible(false);
        setNewComment("");
        // Trigger refetch or update local state after adding the comment
    };

    if (loading) return <ActivityIndicator animating={true} color={MD2Colors.red800} style={{ marginTop: 45 }} />;
    if (error) return <Text>Erreur: {error.message}</Text>;

    return (
        <View style={styles.container}>
            <Button 
                icon="plus" 
                mode="outlined" 
                style={styles.addButton}
                onPress={() => setModalVisible(true)}
            >
                Ajouter un commentaire
            </Button>

            {data?.data.commentaires.map((commentaire: any) => (
                <Commentaire 
                    key={commentaire.id} 
                    firstName={commentaire.utilisateur.firstName} 
                    id={commentaire.id} 
                    contenu={commentaire.contenu} 
                    createdAt={commentaire.createdAt} 
                />
            ))}

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Ajouter un commentaire</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Écrivez votre commentaire ici"
                            value={newComment}
                            onChangeText={setNewComment}
                            multiline
                        />
                        <View style={styles.modalActions}>
                            <TouchableOpacity
                                style={[styles.modalButton, styles.cancelButton]}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.modalButtonText}>Annuler</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.modalButton, styles.submitButton]}
                                onPress={handleAddComment}
                            >
                                <Text style={styles.modalButtonText}>Ajouter</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: "#f9f9f9",
        flex: 1,
    },
    addButton: {
        alignSelf: "flex-end",
        margin: 10,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        width: "90%",
        padding: 20,
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15,
        textAlign: "center",
    },
    input: {
        height: 100,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        marginBottom: 20,
        textAlignVertical: "top",
    },
    modalActions: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    modalButton: {
        flex: 1,
        marginHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: "center",
    },
    cancelButton: {
        backgroundColor: "#e0e0e0",
    },
    submitButton: {
        backgroundColor: "#007bff",
    },
    modalButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default withAuth(Commentaires);
