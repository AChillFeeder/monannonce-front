import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

export default function CreateSignalement({visible}: {visible: boolean}) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Button title="Show Modal" onPress={() => setModalVisible(true)} />

            <Modal
                animationType="slide" // Animation can be "slide", "fade", or "none"
                transparent={true} // Set true to make the modal background transparent
                visible={modalVisible}
                onRequestClose={() => {
                    // Called when the modal is dismissed
                    setModalVisible(false);
                }}
            >
                <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Hello from the Modal!</Text>
                    <Text>This is a native modal in React Native.</Text>

                    {/* Close button */}
                    <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => setModalVisible(false)}
                    >
                    <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
},
modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
},
modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
},
closeButton: {
    marginTop: 20,
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
},
closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
},
});
