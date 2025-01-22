import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Button, Snackbar } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import FormulairePassePartout from '../../components/form';
import { BASE_URL } from '@/app/utils/useFetch';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as FileSystem from 'expo-file-system';

export default function CreateAnnonce() {
    const [selectedImage, setSelectedImage] = useState('');
    const [visible, setVisible] = useState(false); // Snackbar visibility
    const [loading, setLoading] = useState(false); // API loading state

    const onDismissSnackBar = () => setVisible(false);

    const handleFormSubmit = async (data: any) => {
        setLoading(true);

        let base64Image = '';
        if (selectedImage) {
            try {
                base64Image = await FileSystem.readAsStringAsync(selectedImage, {
                    encoding: FileSystem.EncodingType.Base64,
                });
            } catch (error) {
                console.error('Error converting image to base64:', error);
            }
        }

        const body = JSON.stringify({
            ...data,
            userId: await AsyncStorage.getItem('userId'),
            image: base64Image, // Send the image as base64
            archived: false,
        });

        console.log(body);

        try {
            const response = await fetch(`${BASE_URL}/annonces`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: body,
            });

            if (!response.ok) {
                console.log(response);
                throw new Error('Failed to create annonce');
            }

            setVisible(true); // Show success Snackbar
        } catch (error) {
            console.error('Error creating annonce:', error);
        } finally {
            setLoading(false);
        }
    };

    const formFields = [
        { name: 'titre', label: 'Titre', value: '' },
        { name: 'description', label: 'Description', value: '' },
        { name: 'prix', label: 'Prix', value: '' },
    ];

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Créer une nouvelle annonce</Text>
            <FormulairePassePartout fields={formFields} onSubmit={handleFormSubmit} />

            <Button icon="camera" onPress={pickImage} mode="outlined" style={styles.imageButton}>
                <Text>Choisir une image</Text>
            </Button>

            {selectedImage && (
                <Image source={{ uri: selectedImage }} style={styles.imagePreview} />
            )}

            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                action={{
                    label: 'Voir mes annonces',
                    onPress: () => {
                        // Redirect to user's profile
                    },
                }}
                style={styles.snackbar}
            >
                Annonce créée avec succès
            </Snackbar>

            {loading && <Text style={styles.loadingText}>Chargement...</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        marginBottom: 24,
        fontSize: 24,
        textAlign: 'center',
        fontWeight: '600',
    },
    imageButton: {
        borderRadius: 0,
        marginTop: 15,
    },
    imagePreview: {
        marginTop: 16,
        width: 200,
        height: 200,
        alignSelf: 'center',
    },
    snackbar: {
        backgroundColor: '#20421d',
        color: 'black',
        width: '100%',
    },
    loadingText: {
        textAlign: 'center',
        color: '#888',
        marginTop: 10,
    },
});
