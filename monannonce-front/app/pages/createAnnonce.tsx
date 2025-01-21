import React, { useState } from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';
import { Text } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import FormulairePassePartout from '../components/form';

export default function CreateAnnonce() {
const [selectedImage, setSelectedImage] = useState(null);

const handleFormSubmit = (data: any) => {
    console.log('Form Data:', { ...data, image: selectedImage });
    // Handle the creation of a new annonce here (e.g., API call)
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

    <Button title="Choisir une image" onPress={pickImage} />

    {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.imagePreview} />
    )}
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
});
