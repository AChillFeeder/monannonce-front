import { Text, View, StyleSheet } from "react-native";
import { withAuth } from '../utils/auth';
import Liste_de_signalements from "../components/signalement/liste_de_signalements";

// N'est visible que par les admin
function Signalements() {

    return (
        <View style={{
            padding: 10,
        }}>
            <Text style={styles.title}>Liste des signalements</Text>
            <View style={styles.container}>
                <Liste_de_signalements />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    marginTop: 10
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  button: {
    marginTop: 16,
    borderRadius: 0,
    backgroundColor: '#de4918',
  }
});


export default withAuth(Signalements);