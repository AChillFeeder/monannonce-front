import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAuth = async () => {
  const token = await AsyncStorage.getItem('userToken');
  return !!token; // Return true if a token exists
};