import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { Link } from 'expo-router';
import FormulairePassePartout from '../../components/form';

export default function Signup() {
  const router = useRouter();

  const handleSignup = async (data: any) => {
    const { username, email, password } = data;
    console.log('Username:', username, 'Email:', email, 'Password:', password);
    // CALL API ICI
  };

  const formFields = [
    { name: 'username', label: "Nom d'utilisateur", value: '' },
    { name: 'first_name', label: "Prénom", value: '' },
    { name: 'email', label: 'Email', value: '' },
    { name: 'password', label: 'Mot de passe', value: '', secureTextEntry: true },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Création de compte</Text>
      <FormulairePassePartout fields={formFields} onSubmit={handleSignup} />
      <Link href={{ pathname: '/pages/login' }} style={styles.link}>
        Déjà inscrit ? Connectez-vous ici
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
