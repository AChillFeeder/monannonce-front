import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Button, Snackbar } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import FormulairePassePartout from '../components/form';

export default function CreateAnnonce() {
const [selectedImage, setSelectedImage] = useState(null);

const [visible, setVisible] = React.useState(false); // snackbar
const onDismissSnackBar = () => setVisible(false);

const handleFormSubmit = (data: any) => {
    console.log('Form Data:', { ...data, image: selectedImage });
    // Handle the creation of a new annonce here (e.g., API call)
    setVisible(true);
    // doit envoyer vers l'annonce créée
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

        <Button icon='camera' onPress={pickImage} mode='outlined' style={{borderRadius: 0, marginTop: 15}}>
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
                // envoyer au profil
                },
            }}
            style={styles.snackbar}
            >
            Annonce créée avec succès
        </Snackbar>
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
imagePreview: {
    marginTop: 16,
    width: 200,
    height: 200,
    alignSelf: 'center',
},
snackbar: {
    backgroundColor: '#20421d',
    color: 'black',
    width: '100%'
}
});
