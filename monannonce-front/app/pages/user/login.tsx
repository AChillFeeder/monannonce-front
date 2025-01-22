import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { Link } from 'expo-router';

import AsyncStorage from '@react-native-async-storage/async-storage';
import FormulairePassePartout from '../../components/form';

export default function Login() {
  const router = useRouter();

  React.useEffect(() => {
    console.log('User logged out');
    AsyncStorage.setItem('userId', '');
  }, []);

  const handleLogin = async (data: any) => {
    const { username, password } = data;
    console.log('Username:', username, 'Password:', password);

    const token = {
      userId: '1',
      userRole: 'admin'
    };
    await AsyncStorage.setItem('userId', token.userId);
    await AsyncStorage.setItem('userRole', token.userRole);
    console.log('User logged in');
    console.log(await AsyncStorage.getItem('userId'))
    router.replace('/');
  };

  const formFields = [
    { name: 'username', label: "Nom d'utilisateur", value: '' },
    { name: 'password', label: 'Mot de passe', value: '', secureTextEntry: true },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>
      <FormulairePassePartout fields={formFields} onSubmit={handleLogin} />
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
  link: {
    marginTop: 24,
    textAlign: 'center',
    color: 'blue',
  },
});
