import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { Link } from 'expo-router';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  React.useEffect(() => {
    console.log('user logged out')
    AsyncStorage.setItem('userToken', '');
  })
  
  const handleLogin = async () => {
    const token = 'fake-token'; // à remplacer avec l'id de l'utilisateur
    await AsyncStorage.setItem('userToken', token);
    console.log('User logged in');
    router.replace('/');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>

      <TextInput
        label="Nom d'utilisateur"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        mode="outlined"
      />

      <TextInput
        label="Mot de passe"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
        mode="outlined"
      />

      <Button
        icon="login"
        mode="contained"
        onPress={handleLogin}
        style={styles.button}
      >
        Se connecter
      </Button>

      <Link href={{ pathname: '/pages/signup' }} style={styles.link}>
        Pas encore inscrit ? Cliquez ici
      </Link>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    marginBottom: 24,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '600',
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
  link: {
    marginTop: 24,
    textAlign: 'center',
    color: 'blue',
  },
});
