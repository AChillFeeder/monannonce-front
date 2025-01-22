import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAuth = async () => {
  const userId = await AsyncStorage.getItem('userId');
  return !!userId; // Return true if a token exists
};